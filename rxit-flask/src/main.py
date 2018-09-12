# coding=utf-8

from src import app, db
from src.entities import Prescriber, User, Dispenser


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 
            'Prescriber': Prescriber,
            'Dispenser': Dispenser,
            'User': User}
