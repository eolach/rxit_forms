# coding=utf-8

# import basic modules
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from marshmallow import Schema, fields, ValidationError, pre_load

# import local modules
from main import db

# define the prescriber classes
class Prescriber(db.Model):
    id = dbColumn(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    street = db.Column(db.String(50))
    city = db.Column(db.String(50))
    province = db.Column(db.String(50))

class PrescriberSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    street = fields.Str()
    city = fields.Str()
    province = fields.Str()

prescriberSchema = PrescriberSchema()
