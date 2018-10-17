# Check the PYTHONPATH environment variable before beginning to ensure that the
# top-level directory is included.  If not, append the top-level.  This allows
# the modules within the .../project/ directory to be discovered.
import sys
import os

print('Creating database tables for Family Recipes app...')

if os.path.abspath(os.curdir) not in sys.path:
    print('...missing directory in PYTHONPATH... added!')
    sys.path.append(os.path.abspath(os.curdir))


# Create the database tables, add some initial data, and commit to the database
from src import db
from entities import Dispenser, Prescriber, User


# Drop all of the existing database tables
db.drop_all()

# Create the database and the database table
db.create_all()

# Insert dispenser data
dispenser1 = Dispenser(name='Campus Pharmacy', street='460 St. Davis Rd #9', city='St. Catharines', province='ON')
dispenser2 = Dispenser(name='West Lincoln Pharmacy', street='25 - 239 St. Catharines St.', city='Smithville', province='ON')
dispenser3 = Dispenser(name='Mapleland IDA Pharmacy', street='120 Welland Ave. Unit 10B', city='St. Catharines', province='ON')
dispenser4 = Dispenser(name='Woods Pharmacy', street='2931 20 Avenue S', city='Lethbridge', province='AB')

# Commit the dispenser data 
db.session.add(dispenser1)
db.session.add(dispenser2)
db.session.add(dispenser3)
db.session.add(dispenser4)

db.session.commit()

# Insert prescriber data
prescriber1 = Prescriber(name='Harbourfront Medical Group', street='605 James St N. suite 102', city='Hamilton', province='ON')
prescriber2 = Prescriber(name='Ambis and Jones Family Medicine', street='310-15 Mountain Ave', city='Stoney Creek', province='ON')
prescriber3 = Prescriber(name='Southgate Medical Centre', street='10-15 Southgate Blvd. S', city='Lethbridge', province='AB')
prescriber4 = Prescriber(name='Nsisi Medical Clinic', street='414, 13th St. N', city='Lethbridge', province='AB')
prescriber5 = Prescriber(name='Lethbridge College Health Services', street='3000 College Drive', city='Lethbridge', province='AB')

# Commit the prescriber data 
db.session.add(prescriber1)
db.session.add(prescriber2)
db.session.add(prescriber3)
db.session.add(prescriber4)
db.session.add(prescriber5)

db.session.commit()

# Insert user data
user1 = User(usename='Harbourfront', password_hash='pbkdf2:sha256:50000$YCxhKrbW$9b6b2c89619765d4836d31a2ee49e9303e1d92eb4ee800c21690a2bb0f757617', prescriber_id=7)
user2 = User(usename='Mapleland', password_hash='pbkdf2:sha256:50000$Oc2sSeQH$96f5243d6b7d37ce6fa5214fe6c2bdce923bc059d71a0e2c7b1d2f7f0d44e307', dispenser_id=7)
user3 = User(usename='Ambis', password_hash='pbkdf2:sha256:50000$GtB0Qett$abccbb4a849bdd93c7a07fdb1b2bfb2fdc966e7b6e2f35e67dc582f97e12fe2e', prescriber_id=7)
user4 = User(usename='WestLincoln', password_hash='pbkdf2:sha256:50000$tztHjFBA$d2ec4c52421ca9455503dcfb8366284fd3a3cd8cc3205c99eb6f93eb129b6a66', dispenser_id=7)
user5 = User(usename='Brock', password_hash='pbkdf2:sha256:50000$FIekujpd$1832d1a279f8adb27e9dbbb89525ea3bfdcb7dbcce81556ec376f35325927988', dispenser_id=7)
user6 = User(usename='Woods', password_hash='pbkdf2:sha256:50000$kv0ZceKs$0f232c45a93d71c041123cfda8c3ab04843e1a38dc0ccfc8af511858c7162cf4', dispenser_id=7)

# Commit the changes for the users
db.session.add(user1)
db.session.add(user2)
db.session.add(user3)
db.session.add(user4)
db.session.add(user5)
db.session.add(user6)

db.session.commit()

print('...done!')
