from flask import Blueprint, request, jsonify
from factories_data import factories
from emissions_logic import calculate_allowed_limit, get_aqi_from_api

emission_api = Blueprint("emission_api", __name__)

@emission_api.route("/submit-emission", methods=["POST"])
def submit_emission():
    data = request.get_json()

    factory_id = data["factory_id"]
    emission_value = data["emission"]

    if factory_id not in factories:
        return jsonify({"error": "Factory not found"}), 404

    city = "Delhi"
    aqi = get_aqi_from_api(city)

    base_limit = factories[factory_id]["base_limit"]
    allowed = calculate_allowed_limit(base_limit, aqi)

    # store emission (current month)
    factories[factory_id]["emissions"]["2026-01"] = emission_value
    factories[factory_id]["allowed_limit"] = allowed

    fine = 500 if emission_value > allowed else 0
    status = "EXCEEDED" if fine > 0 else "OK"

    return jsonify({
        "allowed_limit": allowed,
        "emission": emission_value,
        "status": status,
        "fine": fine
    })
