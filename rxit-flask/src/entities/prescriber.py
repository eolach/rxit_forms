# coding=utf-8

# from flask_marshmallow import Marshmallow

from src import db
from src import ma

# from marshmallow_sqlalchemy import field_for
# define the prescriber classes
# ##### MODEL ######

class PrescriberStatistics(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total_pt_daily = db.Column(db.Numeric)
    total_pt_weekly = db.Column(db.Numeric)
    std_pt_daily = db.Column(db.Numeric)
    std_pt_weekly = db.Column(db.Numeric)
    ext_pt_daily = db.Column(db.Numeric)
    ext_pt_weekly = db.Column(db.Numeric)
    prop_ongoing_daily = db.Column(db.Numeric)
    prop_ongoing_weekly = db.Column(db.Numeric)
    total_rx_daily = db.Column(db.Numeric)
    total_rx_weekly = db.Column(db.Numeric)
    new_rx_daily = db.Column(db.Numeric)
    new_rx_weekly = db.Column(db.Numeric)
    renew_rx_daily = db.Column(db.Numeric)
    renew_rx_weekly = db.Column(db.Numeric)
    auth_rx_daily = db.Column(db.Numeric)
    auth_rx_weekly = db.Column(db.Numeric)
    multi_rx_daily = db.Column(db.Numeric)
    multi_rx_weekly = db.Column(db.Numeric)
    clarify_rx_daily = db.Column(db.Numeric)
    clarify_rx_weekly = db.Column(db.Numeric)
    request_rx_daily = db.Column(db.Numeric)
    request_rx_weekly = db.Column(db.Numeric)
    other_rx_daily = db.Column(db.Numeric)
    other_rx_weekly = db.Column(db.Numeric)
    other_rx_note = db.Column(db.String)

    def __repr__(self):
        return '<PrescriberStatistics {}>'.format(self.total_pt_daily)


class Prescriber(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    street = db.Column(db.String)
    city = db.Column(db.String)
    province = db.Column(db.String)
    statistics_id = db.Column(db.Integer, db.ForeignKey('prescriber_statistics.id'))
    statistics = db.relationship('PrescriberStatistics', backref='statistics')

    def __repr__(self):
        return '<Prescriber {}>'.format(self.name)


class PrescriberSchema(ma.ModelSchema):
    # id = field_for(Prescriber, 'id', dump_only=True)

    class Meta:
        model = Prescriber




class PrescriberStatisticsSchema(ma.ModelSchema):
    # id = field_for(Prescriber, 'id', dump_only=True)

    class Meta:
        model = PrescriberStatistics
