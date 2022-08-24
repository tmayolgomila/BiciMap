"""empty message

Revision ID: bc971ed59101
Revises: 96a6ae9fc41a
Create Date: 2022-08-22 19:28:37.820634

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bc971ed59101'
down_revision = '96a6ae9fc41a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('bike', 'año',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('bike', 'año',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###