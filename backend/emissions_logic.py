import requests

def calculate_allowed_limit(base_limit, air_quality_index):
    adjusted_limit = base_limit - (air_quality_index * 0.5)

    if adjusted_limit < 50:
        adjusted_limit = 50

    return round(adjusted_limit, 2)


def get_aqi_from_api(city="Delhi"):
    url = "https://api.openaq.org/v2/latest"
    params = {"city": city}

    try:
        response = requests.get(url, params=params, timeout=5)
        data = response.json()

        for location in data.get("results", []):
            for measurement in location.get("measurements", []):
                if measurement["parameter"] == "pm25":
                    return measurement["value"]

    except Exception:
        pass

    # fallback AQI if API fails
    return 100
