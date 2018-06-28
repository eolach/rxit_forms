# coding=utf-8

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from marshmallow import Schema, fields, ValidationError, pre_load

from flask_cors import CORS

# creating the flask application
app = Flask(__name__)
# CORS(app)

# configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Calvin191@localhost:5432/rxit-study'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# define the prescriber classes
class Prescriber(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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


# routing from the request
@app.route('/')
def get_prescribers():
  prescribers = Prescriber.query.all()
  # serialize the query set
  result = prescriberSchema.dump(prescribers)
  return jsonify({'prescribers': result})


# routing from the add
""" @app.route('/dispensers', methods=['POST'])
def add_dispenser():
    # mount dispenser object
    posted_dispenser = DispenserSchema(only=('name', 'city')).load(request.get_json())

    dispenser = Dispenser(**posted_dispenser.data, created_by="HTTP post request")

    # persist dispenser
    session = Session()
    session.add(dispenser)
    session.commit()

    # return new dispenser
    new_dispenser = DispenserSchema().dump(dispenser).data
    session.close()
    return jsonify(new_dispenser), 201     """

if __name__ == '__main__':
  db.create_all()
  print("running")
  app.run(debug=True, port=5001)