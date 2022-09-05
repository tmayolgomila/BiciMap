"""empty message

Revision ID: 596437773975
Revises: dee367d92c5e
Create Date: 2022-09-05 09:23:12.175073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '596437773975'
down_revision = 'dee367d92c5e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('bike_email_key', 'bike', type_='unique')
    op.drop_constraint('bike_idestacion_key', 'bike', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('bike_idestacion_key', 'bike', ['idestacion'])
    op.create_unique_constraint('bike_email_key', 'bike', ['email'])
    # ### end Alembic commands ###
