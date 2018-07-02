# coding=utf-8
from sqlalchemy import Column, String
from marshmallow import Schema, fields

from .entity import Entity, Base
# basic and specific entitiesand their schemata
# dispenser detail
class Dispenser(Entity, Base):
    __tablename__ = 'dispensers'

    name = Column(String)
    street = Column(String)
    city = Column(String)
    province = Column(String)
    affiliation = Column(String)
    numberOfPharmacists = Column(Integer)
    numberOfPharmTechs = Column(Integer)
    pmSystem - Column(String)

    def __init__(self, 
                 name, 
                 city,
                 province,
                 affiliation,
                 numberOfPharmacists,
                 numberOfPharmTechs,
                 pmSystem):
        Entity.__init__(self)
        self.name = name
        self.street = street
        self.city = city
        self.province = province
        self.affiliation = affiliation
        self.numberOfPharmacists = numberOfPharmacists
        self.numberOfPharmTechs = numberOfPharmTechs
        self.pmSystem = pmSystem):


class DispenserSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    street = fields.Str()
    city = fields.Str()
    province = fields.Str()
    affiliation = fields.Str()
    numberOfPharmacists = fields.Str()
    numberOfPharmTechs = fields.Str()
    pmSystem = fields.Number()
 