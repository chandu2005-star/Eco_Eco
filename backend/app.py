from flask import Flask, jsonify
from flask_cors import CORS
from factories_data import factories
from emissions_logic import calculate_allowed_limit, get_aqi_from_api
from auth_routes import auth

app = Flask(__name__)
CORS(app)
app.register_blueprint(auth)

@app.route("/")
def home():
    return jsonify({"status": "backend running"})

@app.route("/monthly-report", methods=["GET"])
def monthly_report():
    city = "Delhi"
    aqi = get_aqi_from_api(city)

    report = {}

    for fid, data in factories.items():
        base_limit = data["base_limit"]

        # FINAL CALCULATION
        final_allowed_limit = calculate_allowed_limit(base_limit, aqi)

        # STORE BACK INTO DATABASE
        data["allowed_limit"] = final_allowed_limit

        latest_month = list(data["emissions"].keys())[-1]
        latest_emission = data["emissions"][latest_month]

        report[fid] = {
            "name": data["name"],
            "month": latest_month,
            "emission": latest_emission,
            "allowed_limit": final_allowed_limit,
            "status": "EXCEEDED" if latest_emission > final_allowed_limit else "OK"
        }

    return jsonify({
        "city": city,
        "aqi": aqi,
        "factories": report
    })

if __name__ == "__main__":
    app.run(debug=True)
