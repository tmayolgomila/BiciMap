import { Action } from 'history';
import React, {useContext, useState, useEffect} from 'react';
import { Context } from '../store/appContext';
import "../../styles/alquiler.css";
import Modal from "react-modal";
import { Link } from 'react-router-dom';


function FormAlquiler() { 
  const {store, actions} = useContext(Context)
  const [tipo,setTipo] = useState("");
  const [foto,setFoto] = useState("");
  const [talla,setTalla] = useState("");
  const [material,setMaterial] = useState("");
  const [observaciones,setObservaciones] = useState("");
  const [fechalimite,setLimite] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const [idestacion, setIdestacion] = useState("")
  const [email, setEmail] = useState("")
  
  useEffect(() => {
    actions.getEstaciones()
    {setEmail(store.email)}
  },[])

  
  const uploadImage= async e =>{
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "BiciMap")
    setLoading(true)
  
    const res = await fetch("https://api.cloudinary.com/v1_1/naxinga/image/upload",
    {
      method: "POST",
      body:data
    })
  
    const file = await res.json()
    setFoto(file.secure_url)
    setLoading(false)
    }

  function cerrar (){
      setIsOpen(!isOpen);
  }

  function toggleModal() {
    actions.rentabike(tipo, foto, talla, material, observaciones, fechalimite, email, idestacion);
    setIsOpen(!isOpen);
  }

  const customStyles = {
    overlay: {
      position: "fixed",
      backgroundColor: "rgba(15, 26, 32, 0.75)",
    },
    content: {
      top: "25%",
      left: "50%",
      width: "350px",
      height: "150px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0F1A20",
      color: "white",
      borderColor: "#2FBF71",
    },
  };
  

  return (
    <>
  {localStorage.getItem("jwt-token") == null ? 
          <div><p>Muchas gracias por confiar en nosotros! </p>

<p>Pero para poder subir tu bicicleta debes entrar con tu usuario.</p>

<p>Si aún no estás registrado haga click aqui</p> <p><Link to="/signup"><button id="botonSignUp">SignUp</button></Link></p>

<p>Si ya estás registrado entre aquí</p> <p><Link to="/login"><button id="botonLogin">Login</button></Link></p>
            
          </div>
       :
  
  (
    <>

    <h4>Para alquilar</h4>
    <div className='todo'>
    <div className="container">
      <div className="mb-3" id="formularioAltas" >
        <label>Tipo de bicicleta</label>
        <p>
          <select name="select" type="text" className="cajas" placeholder="montaña/carretera..." onChange={(e) => setTipo(e.target.value)}>
            <option value="Montaña" selected>Montaña</option>
            <option value="Carretera">Carretera</option>
          </select>
        </p>
      </div>

      <div className="mb-3" id="formularioAltasFoto">
        <label>Foto </label>
        <p><input  type="file" name='file'  className="fotoBici" class="custom-file-input" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => {
          uploadImage(e)
          }} required/></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Talla</label>
        <p>
          <select type="text" className="cajas" placeholder="Talla" onChange={(e) => setTalla(e.target.value)}>
            <option value="XL" selected>XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="XS">XS</option>
          </select>
        </p>
      </div>
      
      </div>
      <div className="container2">
      <div className="mb-3" id="formularioAltas">
        <label>Material</label>
        <p>
          <select type="text" className="cajas" placeholder="Material" onChange={(e) => setMaterial (e.target.value)}>
            <option value="Aluminio" selected>Aluminio</option>
            <option value="Acero">Acero</option>
            <option value="Fibra de Carbono">Fibra de Carbono</option>
            <option value="Titanio">Titanio</option>
            <option value="Otro">Otro</option>
          </select>
        </p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Observaciones del vendedor </label>
        <p><input size={25} type="text" className="cajas" placeholder=" " onChange={(e) => setObservaciones (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Fecha límite de alquiler</label>
        <p><input type="text" className="cajas" placeholder=" " onChange={(e) => setLimite (e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Estación:</label>
        <p>
          <select type="text" className="cajas" onChange={(e) => setIdestacion (e.target.value)}>
          { store.estaciones.map((est, i) => {
            return( est.id===2 ?
              <option value={est.id} key={i} selected>{est.direccion}</option>
              :
              <option value={est.id} key={i}>{est.direccion}</option>
           )
        
          
        })}            
          </select>
        </p>
      </div>    
      
      </div>
    </div>
    <button id="botonForm3" variant="primary" type="submit" onClick={toggleModal}>
        Subir 
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
          {tipo == "" || foto == "" || talla == "" || material == "" ? (
            <p className="ter">Campos vacios</p>
          ) : (
            <p className="ter">Su bicicleta para alquilar ha sido añadida!</p>
          )}
        </div>
        <button id="botonModal" onClick={cerrar}>
          Cerrar
        </button>
      </Modal>
    </>

    
  )}
   </>
  )
}
export default FormAlquiler;

