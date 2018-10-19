# coding=utf-8

# 1 - imports
from datetime import date

from .dispenser import Dispenser
from .entity import Session, engine, Base

# 2 - generate database schema
Base.metadata.create_all(engine)

# 3 - create a new session
session = Session()

# 4 - create dispensers
campus_pharmacy = Dispenser("Campus Pharmacy", 'St. Catherines', 'me')
west_lincoln_pharmcay = Dispenser("West Lincoln Pharmacy", "West Lincoln", 'me')
mapleland_ida_pharmacy = Dispenser("Mapleland IDA Pharmacy", "Burlington", 'me')

# 9 - persists data
session.add(campus_pharmacy)
session.add(west_lincoln_pharmcay)
session.add(mapleland_ida_pharmacy)

# 10 - commit and close session
session.commit()
session.close()