# coding=utf-8
from sqlalchemy import Column, String
from marshmallow import Schema, fields

from .entity import Entity, Base


class Dispenser(Entity, Base):
    __tablename__ = 'dispensers'

    name = Column(String)
    city = Column(String)

    def __init__(self, name, city, created_by):
        Entity.__init__(self, created_by)
        self.name = name
        self.city = city

class DispenserSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    city = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
