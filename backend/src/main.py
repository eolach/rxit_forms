# coding=utf-8

from flask import Flask, jsonify, request

from .entities.entity import Session, engine, Base
from .entities.dispenser import Dispenser, DispenserSchema

# creating the flask application
app = Flask(__name__)

# if needed, generate database schema
Base.metadata.create_all(engine)


# routing from the request
@app.route('/dispensers')
def get_dispensers():
  # fetching from the database
  # start session
  session = Session()
  
  # reload dispenser
  dispenser_objects = session.query(Dispenser).all()

  # transforming into JSON-serializable objects
  schema = DispenserSchema(many=True)
  dispensers = schema.dump(dispenser_objects)
  
  # serializing as JSON
  session.close()
  return jsonify(dispensers.data)

# routing from the add
@app.route('/dispensers', methods=['POST'])
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
    return jsonify(new_dispenser), 201    