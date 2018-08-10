from src import app, db, ma
from src.entities.prescriber import Prescriber, PrescriberSchema
from src.entities.dispenser import Dispenser, DispenserSchema

request = {
        "city": "Hamilton",
        "name": "Pharmacy Two",
        "province": "ON",
        "street": "South st."
    }


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 
            'ma': ma, 
            'Prescriber': Prescriber, 
            'PrescriberSchema': PrescriberSchema,
            'Dispenser': Dispenser,
            'DispenserSchema': DispenserSchema,
            'request': request
            }