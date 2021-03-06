"""extending user with participants

Revision ID: 730317caaa28
Revises: 6b6633aba82a
Create Date: 2018-08-28 14:02:14.584881

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '730317caaa28'
down_revision = '6b6633aba82a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('dispenser_id', sa.Integer(), nullable=True))
    op.add_column('user', sa.Column('prescriber_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'user', 'prescriber', ['prescriber_id'], ['id'])
    op.create_foreign_key(None, 'user', 'dispenser', ['dispenser_id'], ['id'])
    op.drop_column('user', 'participant_name')
    op.drop_column('user', 'participant_type')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('participant_type', sa.VARCHAR(length=128), autoincrement=False, nullable=True))
    op.add_column('user', sa.Column('participant_name', sa.VARCHAR(length=128), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'user', type_='foreignkey')
    op.drop_constraint(None, 'user', type_='foreignkey')
    op.drop_column('user', 'prescriber_id')
    op.drop_column('user', 'dispenser_id')
    # ### end Alembic commands ###
