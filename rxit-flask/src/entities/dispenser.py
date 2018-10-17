# coding=utf-8
from src import db
from src import ma

# dispenser detail


class Dispenser (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    street = db.Column(db.String)
    city = db.Column(db.String)
    province = db.Column(db.String)

    def __repr__(self):
        return '<Dispenser {}>'.format(self.name)


class DispenserSchema (ma.ModelSchema):
    # id = field_for(Prescriber, 'id', dump_only=True)

    class Meta:
        model = Dispenser
