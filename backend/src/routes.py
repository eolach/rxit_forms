from flask import jsonify, request
from marshmallow import ValidationError
from flask_login import current_user, login_user

from .auth import AuthError, requires_auth

from src import app, db
from src.entities.dispenser import Dispenser, DispenserSchema
from src.entities.prescriber import Prescriber, PrescriberSchema
from src.entities.user import PrivateUser
# from entities.dispenser import Dispenser

dispenser_schema = DispenserSchema()
dispensers_schema = DispenserSchema(many=True)
prescriber_schema = PrescriberSchema()
prescribers_schema = PrescriberSchema(many=True)


# routing from the request
@app.route('/')
def index():
    return "Index here"


# handle dispensers routing
@app.route('/dispensers')
def get_dispensers():
    all_dispensers = Dispenser.query.all()
    dispensers_result = dispensers_schema.dump(all_dispensers)
    return jsonify(dispensers_result.data)


# handle single dispenser routing
@app.route('/dispensers/<string:dispenser_id>')
def get_dispenser(dispenser_id):
    id = int(dispenser_id)
    try:
        dispenser = Dispenser.query.get(id)
    except ValidationError:
        return jsonify({'message': 'Dispenser could not be found.'}), 400
    dispenser_result = dispenser_schema.dump(dispenser)
    return jsonify(dispenser_result.data)


# routing from the add Dispenser
@app.route('/dispensers', methods=['POST'])
def new_dispenser():
    # check request
    json_data = request.get_json()
    if not json_data:
        return jsonify({'message': 'No input data provided'}), 400
    # Validate and deserialize input
    try:
        posted_dispenser = DispenserSchema(
          only=('name', 'street', 'city', 'province')
          ).load(json_data)
    except ValidationError as err:
        return jsonify(err.messages), 402

    dispenser = posted_dispenser.data
    # persist in database
    db.session.add(dispenser)
    db.session.commit()

    # return created prescriber
    new_dispenser = DispenserSchema().dump(dispenser).data
    return jsonify({
        'message': 'Created new dispenser. ',
        'request': json_data,
        'dispenser': new_dispenser,
        })


# handle prescribers routing
@app.route('/prescribers')
def get_prescribers():
    all_prescribers = Prescriber.query.all()
    prescribers_result = prescribers_schema.dump(all_prescribers)
    return jsonify(prescribers_result.data)


# handle single prescriber routing
@app.route('/prescribers/<string:prescriber_id>')
def get_prescriber(prescriber_id):
    id = int(prescriber_id)
    try:
        prescriber = Prescriber.query.get(id)
    except ValidationError:
        return jsonify({'message': 'Prescriber could not be found.'}), 400
    prescriber_result = prescriber_schema.dump(prescriber)
    return jsonify(prescriber_result.data)


# routing from the add Prescriber
@app.route('/prescribers', methods=['POST'])
def update_prescriber():
    # check request
    json_data = request.get_json()
    if not json_data:
        return jsonify({'message': 'No input data provided'}), 400
    # Validate and deserialize input
    try:
        posted_prescriber = PrescriberSchema(
          only=('name', 'street', 'city', 'province')
          ).load(json_data)
    except ValidationError as err:
        return jsonify(err.messages), 402

    this_prescriber = posted_prescriber.data
    # retrieve exiting prescriber from db
    existing_prescriber = Prescriber.query.filter_by(name=this_prescriber.name).first()
    if (existing_prescriber is not None):
        prescriber_schema.load(json_data, db.session, existing_prescriber)
        error_message = "Updated record"
    # persist in database
    # db.session.add(prescriber)
        db.session.commit()
    else: 
        error_message = "Failed"

    new_prescriber = PrescriberSchema().dump(existing_prescriber).data
    return jsonify({
        'message': error_message,
        'request': json_data,
        # 'request prescriber': new_prescriber.data.name,
        # 'prescriber': existing_prescriber.name,
        })

# routing for user
@app.route('/user/authenticate')
def login():
    if current_user.is_authenticated:
        return redirect(url_for(''))
    form = LoginForm()
    if form.validate_on_submit():
        user = PrivateUser.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password(form.password.data)):
            flash('Invalid user name or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        return redirect(url_for(''))


# handle authorization error
@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response

# @app.route('/shutdown', methods=['POST'])
# def shutdown():
#     shutdown_server()
#     return 'Server shutting down...'