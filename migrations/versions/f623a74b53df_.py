"""empty message
Revision ID: f623a74b53df
Revises:
Create Date: 2022-09-02 15:53:57.153629
"""
from alembic import op
import sqlalchemy as sa
# revision identifiers, used by Alembic.
revision = 'f623a74b53df'
down_revision = None
branch_labels = None
depends_on = None
def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bike',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tipo', sa.String(length=120), nullable=False),
    sa.Column('foto', sa.String(length=120), nullable=True),
    sa.Column('precio', sa.Integer(), nullable=True),
    sa.Column('año', sa.Integer(), nullable=True),
    sa.Column('modificaciones', sa.String(length=200), nullable=True),
    sa.Column('talla', sa.String(length=80), nullable=False),
    sa.Column('material', sa.String(length=120), nullable=False),
    sa.Column('observaciones', sa.String(length=200), nullable=True),
    sa.Column('fechalimite', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('estaciones',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('direccion', sa.String(length=120), nullable=False),
    sa.Column('numeroBicis', sa.Integer(), nullable=True),
    sa.Column('numeroParkings', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('direccion')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('nombre', sa.String(length=80), nullable=False),
    sa.Column('apellidos', sa.String(length=120), nullable=False),
    sa.Column('telefono', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('telefono')
    )
    # ### end Alembic commands ###
def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('estaciones')
    op.drop_table('bike')
    # ### end Alembic commands ###