from flask import Blueprint, request, jsonify
from Login_credentials import users


auth = Blueprint("auth", __name__)

@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    role = data.get("role")
    username = data.get("username")
    password = data.get("password")

    if (
        role in users and
        username in users[role] and
        users[role][username] == password
    ):
        return jsonify({"status": "success"}), 200

    return jsonify({"status": "failed"}), 401


# ✅ PUBLIC REGISTER (USES SAME users DICT)
@auth.route("/public-register", methods=["POST"])
def public_register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if email in users["public"]:
        return jsonify({"status": "exists"}), 409

    users["public"][email] = password
    return jsonify({"status": "registered"}), 200
