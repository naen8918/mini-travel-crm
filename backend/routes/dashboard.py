from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt

dashboard = Blueprint('dashboard', __name__)


@dashboard.route('/dashboard', methods=['GET'])
@jwt_required()
def get_dashboard():
    claims = get_jwt()
    return jsonify({
        "message": "Welcome to your dashboard!",
        "name": claims.get("name"),
        "role": claims.get("role")
    }), 200
