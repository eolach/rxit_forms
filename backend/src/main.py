# coding=utf-8

from src import app, db
from src.entities import Prescriber


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Prescriber': Prescriber}
