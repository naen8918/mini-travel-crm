# auth/models.py
from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)  # stores email
    name = db.Column(db.String(100), nullable=True)          # Full name of the user
    role = db.Column(db.String(20), nullable=False)          # 'admin', 'agent', 'analyst'
    password_hash = db.Column(db.String(128), nullable=False)


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
