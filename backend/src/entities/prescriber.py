# coding=utf-8

# from flask_marshmallow import Marshmallow

from src import db
from src import ma

# from marshmallow_sqlalchemy import field_for
# define the prescriber classes
# ##### MODEL ######


class Prescriber(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    street = db.Column(db.String)
    city = db.Column(db.String)
    province = db.Column(db.String)

    def __repr__(self):
        return '<Prescriber {}>'.format(self.name)


class PrescriberSchema(ma.ModelSchema):
    # id = field_for(Prescriber, 'id', dump_only=True)

    class Meta:
        model = Prescriber
