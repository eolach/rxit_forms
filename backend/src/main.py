# coding=utf-8

from flask import Flask, jsonify, request
from sqlalchemy import create_engine, Column, String, Integer, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from marshmallow import Schema, fields

from flask_cors import CORS

# creating the flask application
app = Flask(__name__)
CORS(app)

# configure the database
engine = create_engine('postgresql://postgres:Calvin191@localhost:5432/rxit-study')
Session = sessionmaker(bind=engine)
Base = declarative_base()

###### MODELS ######
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

####### SCHEMAS #########
class PrescriberSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    street = fields.Str()
    city = fields.Str()
    province = fields.Str()

# if needed, generate database schema
Base.metadata.create_all(engine)


# routing from the request
@app.route('/prescribers')
def get_prescribers():
  # fetching from the database
  session = Session()
  prescriber_objects = session.query(Prescriber).all()
  
  # transforming into JSON-serializable objects
  schema = PrescriberSchema(many=True)
  prescribers = schema.dump(prescriber_objects)
  
  # serializing as JSON
  session.close()
  return jsonify(prescribers.data)


# routing from the add
@app.route('/prescribers/', methods=['POST'])
def new_prescriber():
    
    #check request
    json_data = request.get_json()
    if not json_data:
        return jsonify({'message': 'No input data provided'}), 400
    
    # Validate and deserialize input
    try:
        posted_prescriber = PrescriberSchema(only=('name', 'street', 'city', 'province')) \
            .load(json_data)
    except ValidationError as err:
        return jsonify(err.messages), 402

    """ thisPrescriberName = data['name'][0]
    thisPrescriber = Prescriber
        .query.filter_by(name=thisPrescriberName).first()
    
    if thisPrescriber is None: """
    prescriber = Prescriber(**posted_prescriber.data)

    # persist in database
    session = Session()
    session.add(prescriber)
    session.commit()

    # return created prescriber
    new_prescriber = PrescriberSchema().dump(prescriber).data
    return jsonify({
        'message': 'Created new prescriber. ',
        'prescriber': new_prescriber,
        }) 

if __name__ == '__main__':
#  db.create_all()
  print("running")
  app.run(debug=True, port=5000)