from src import app
from src.entities.prescriber import Prescriber
# from entities.dispenser import Dispenser

@app.route('/')
@app.route('/index')
def index():
    return "Hello RXIT"

# routing from the request
@app.route('/prescribers')
def prescribers():
  # fetching from the database
  return "These prescribers"
 
 
"""    
  session = Session()
  prescriber_objects = session.query(Prescriber).all()
  
  # transforming into JSON-serializable objects
  schema = PrescriberSchema(many=True)
  prescribers = schema.dump(prescriber_objects)
  
  # serializing as JSON
  session.close()
  return jsonify(prescribers.data)
 """