# coding=utf-8

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from flask_cors import CORS

# creating the flask application
app = Flask(__name__)
CORS(app)

# configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Calvin191@localhost:5432/rxit-study'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

###### MODELS ######
class Prescriber(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    street = db.Column(db.String(50))
    city = db.Column(db.String(50))
    province = db.Column(db.String(50))

####### SCHEMAS #########
class PrescriberSchema(ma.ModelSchema):
    class Meta:
        model = Prescriber


prescriberSchema = PrescriberSchema()
prescribersSchema = PrescriberSchema(many=True)


# routing from the request
@app.route('/prescribers')
def get_prescribers():
  prescribers = Prescriber.query.all()
  # serialize the query set
  result = prescribersSchema.dump(prescribers)
  return jsonify({'prescribers': result})


# routing from the add
@app.route('/prescribers/', methods=['POST'])
def new_prescriber():
    json_data = request.get_json()
    if not json_data:
        return jsonify({'message': 'No input data provided'}), 400
    # Validate and deserialize input
    try:
        data = prescriberSchema.load(json_data)
    except ValidationError as err:
        return jsonify(err.messages), 402

    thisPrescriberName = data['name'][0]
    thisPrescriber = Prescriber.query.filter_by(name=thisPrescriberName).first()
    
    if thisPrescriber is None:
      prescriber = Prescriber(name=data['name'], city=data['city'], province=data['province'])

    db.session.add(prescriber)
    db.session.commit()
    result = prescriberSchema.dump(Prescriber.query.get(prescriber.id))
    return jsonify({
        'message': 'Created new prescriber. ',
        'prescriber': result,
        }) 

if __name__ == '__main__':
  db.create_all()
  print("running")
  app.run(debug=True, port=5000)