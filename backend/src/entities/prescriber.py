# coding=utf-8

# import basic modules
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from marshmallow import Schema, fields, ValidationError, pre_load

from src.main import Base

# import local modules
# from src.main import db

# define the prescriber classes
###### MODEL ######
class Prescriber(Base):
    __tablename__ = 'prescribers'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    street = Column(String)
    city = Column(String)
    province = Column(String)

    def __init__(self, name, street, city, province):
        self.name = name
        self.street = street
        self.city = city
        self.province = province

####### SCHEMA #########
class PrescriberSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    street = fields.Str()
    city = fields.Str()
    province = fields.Str()
    