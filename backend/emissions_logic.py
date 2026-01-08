# backend/calc.py

from factories_data import factories

def calculate_allowed_limit(base_limit, air_quality_index):
    adjusted_limit = base_limit - (air_quality_index * 0.5)
    if adjusted_limit < 50:
        adjusted_limit = 50
    return round(adjusted_limit, 2)


def update_factory_allowed_limits(air_quality_index):
    """
    FINAL CONNECTION:
    - Calculates allowed limit
    - Stores it DIRECTLY into factory database
    """

    for factory_id, data in factories.items():
        base_limit = data.get("base_limit", 150)  # default base limit
        final_limit = calculate_allowed_limit(base_limit, air_quality_index)

        # ✅ FINAL RESULT STORED HERE
        data["allowed_limit"] = final_limit
