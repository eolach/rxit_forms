from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from src import db, login
from src import ma


class User (UserMixin, db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    password = db.Column(db.String(128))
    authorization_level = db.Column(db.Integer)
    remember_me = db.Column(db.Boolean)
    prescriber_id = db.Column(db.Integer, db.ForeignKey('prescriber.id'))
    prescriber = db.relationship('Prescriber', backref='user')
    dispenser_id = db.Column(db.Integer, db.ForeignKey('dispenser.id'))
    dispenser = db.relationship('Dispenser', backref='user')

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


class UserSchema(ma.ModelSchema):
    # id = field_for(Prescriber, 'id', dump_only=True)

    class Meta:
        model = User
