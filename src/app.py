import os
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Bike, Estaciones
from api.admin import setup_admin
from api.commands import setup_commands
from flask import send_from_directory

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config["JWT_SECRET_KEY"] = "supersecreto"  # Change this "super secret" with something else!
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app, origins=["*"])

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
basedir = os.path.abspath(os.path.dirname(__file__))
uploads_path = os.path.join(basedir, 'uploads')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

@app.route("/signup", methods = ["POST"])
def signup():
    body = request.get_json()
    comprobando = User.query.filter_by(email = body["email"]).first()
    if comprobando != None:
        return "el email ya existe"
    user = User(email = body["email"], password = body["password"], nombre = body["nombre"], apellidos = body["apellidos"],telefono = body["telefono"]  )
    db.session.add(user)
    db.session.commit()
    token=create_access_token(identity=user.id)
    return jsonify(token)

@app.route("/login", methods = ["POST"])
def login():
    body = request.get_json()
    email= body["email"]
    password=body["password"]
    comprobando = User.query.filter_by(email = body["email"]).first()
    psw = User.query.filter_by(password = body["password"]).first()
    if comprobando == None:
       raise APIException('Email no encontrado')
    if psw == None:
       raise APIException('Contraseña incorrecta') 
    if comprobando.password != psw.password:
        raise APIException('Contraseña incorrecta') 
    token=create_access_token(identity=comprobando.id)
    return jsonify(token)

@app.route("/altas", methods=['GET'])
@jwt_required()
def private():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200

@app.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    #Consultamos base de datos por email y contraseña
    user = User.filter.query(email=email, password=password).first()
    if user is None:
        return jsonify({"msg":"error in the email or password"}), 401
    #Creamos un nuevo token con el id del usuario
    access_token = create_access_token( identity=user.id)
    return jsonify({"token":access_token, "user_id":user.id}), 200

@app.route("/altasvender", methods = ["POST"])
def addbike():
    body = request.get_json()
    bike = Bike(tipo = body["tipo"], foto = body["foto"], precio = body["precio"],año = body["año"], modificaciones = body["modificaciones"], talla = body["talla"], material = body["material"], observaciones = body["observaciones"], email = body["email"], idestacion = body["idestacion"] )
    db.session.add(bike)
    db.session.commit()
    return jsonify(), 200

@app.route("/modbike/<int:id>", methods = ["PUT"])
def modbike(id):
    body = request.get_json
    bike = Bike.query.filter_by( id = id ).first()
    #bike = Bike(tipo = body["tipo"],talla = body["talla"], material = body["material"], año = body["año"], modificaciones = body["modificaciones"])
    tipo = request.json["tipo"]
    talla = request.json["talla"]
    material = request.json["material"]
    año = request.json["año"]
    modificaciones = request.json["modificaciones"]
    bike.tipo = tipo
    bike.talla = talla
    bike.material = material
    bike.año = año
    bike.modificaciones = modificaciones
    
    db.session.commit()
    return jsonify("updated"), 200

@app.route("/altasalquiler", methods = ["POST"])
def rentabike():
    body = request.get_json()
    bike = Bike(tipo = body["tipo"], foto = body["foto"], talla = body["talla"], material = body["material"], observaciones = body["observaciones"], fechalimite=body["fechalimite"], email = body["email"], idestacion = body["idestacion"])
    db.session.add(bike)
    db.session.commit()
    return jsonify(), 200

@app.route("/estaciones", methods = ["POST"])
def estaciones():
    body = request.get_json()
    comprobando = Estaciones.query.filter_by(id = body["id"]).first()
    if comprobando != None:
        return "esta estación ya existe"
    estacion = Estaciones(direccion = body["direccion"], numeroBicis = body["numeroBicis"], numeroParkings = body["numeroParkings"])
    db.session.add(estacion)
    db.session.commit()
    
    return jsonify(), 200

@app.route('/bikes', methods=['GET'])
def bike_list():

    bikes = Bike.query.all()
    listBikes = list(map(lambda obj: obj.serialize(),bikes))
    response_body = {
        "results" : listBikes
    }
    return jsonify(response_body), 200

@app.route('/user/<int:id>', methods=['DELETE'])
def delete_bike(id):
    bike = Bike.query.filter_by( id = id ).first()

    if not bike:
        return jsonify({'message':'error'}),404
    db.session.delete(bike)
    db.session.commit()
    return jsonify("bike deleted"), 200

    
@app.route('/estaciones', methods=['GET'])
def estaciones_list():

    estaciones = Estaciones.query.all()
    listEstaciones = list(map(lambda obj: obj.serialize(),estaciones))
    response_body = {
        "results" : listEstaciones
    }
    return jsonify(response_body), 200

@app.route('/pagos/<int:id>', methods=['GET'])
def pagar(id):
    bike = Bike.query.filter_by( id = id ).first()

    precio = bike.precio
    response_body = {
        "precio" : precio
    }

    return jsonify(response_body) , 200


if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

