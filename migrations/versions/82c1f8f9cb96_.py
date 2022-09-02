"""empty message

<<<<<<<< HEAD:migrations/versions/82c1f8f9cb96_.py
Revision ID: 82c1f8f9cb96
Revises: 
Create Date: 2022-09-02 18:02:14.474505
========
Revision ID: f623a74b53df
Revises: 
Create Date: 2022-09-02 15:53:57.153629
>>>>>>>> BicCat:migrations/versions/f623a74b53df_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/82c1f8f9cb96_.py
revision = '82c1f8f9cb96'
========
revision = 'f623a74b53df'
>>>>>>>> BicCat:migrations/versions/f623a74b53df_.py
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
<<<<<<<< HEAD:migrations/versions/82c1f8f9cb96_.py
    sa.UniqueConstraint('direccion'),
    sa.UniqueConstraint('id')
========
    sa.UniqueConstraint('direccion')
>>>>>>>> BicCat:migrations/versions/f623a74b53df_.py
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
