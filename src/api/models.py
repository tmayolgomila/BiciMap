from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellidos = db.Column(db.String(120), unique=False, nullable=False)
    telefono = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellidos": self.apellidos, 
            "telefono": self.telefono,
        }
    
class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(120), unique=False, nullable=False)
    foto = db.Column(db.String(120), unique=False)
    precio = db.Column(db.Integer)
    año = db.Column(db.Integer)
    modificaciones = db.Column(db.String(200))
    talla = db.Column(db.String(80), nullable=False)
    material = db.Column(db.String(120), nullable=False)
    observaciones = db.Column(db.String(200))
    fechalimite = db.Column(db.Integer, unique=False, nullable=True)
    
    def __repr__(self):
        return f'<Bike {self.foto}>'

    def serialize(self):
        return {
            "id": self.id,
            "tipo": self.tipo,
            "foto": self.foto,
            "precio": self.precio, 
            "año": self.año,
            "modificaciones": self.modificaciones,
            "talla": self.talla,
            "material": self.material,
            "observaciones": self.observaciones,
            "fechalimite": self.fechalimite,
        }

class Estaciones(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    direccion = db.Column(db.String(120), unique=True, nullable=False)
    numeroBicis = db.Column(db.Integer)
    numeroParkings = db.Column(db.Integer)


    def __repr__(self):
        return f'<Estaciones {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "direccion": self.direccion,
            "numeroBicis": self.numeroBicis,
            "numeroParkings": self.numeroParkings,
        }