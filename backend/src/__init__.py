from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_login import LoginManager
from flask_cors import CORS
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)
login = LoginManager(app)

CORS(app)

from src import routes
