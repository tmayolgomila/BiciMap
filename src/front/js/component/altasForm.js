import { Action } from 'history';
import React, {useContext, useState} from 'react';
import { Context } from '../store/appContext';
import "../../styles/altas.css";
import Modal from "react-modal";
import { Link } from 'react-router-dom';


function FormAltas() { 
  const {store, actions} = useContext(Context)
  const [tipo,setTipo] = useState("");
  const [foto, setFoto] = useState("");
  const [precio,setPrecio] = useState("");
  const [año,setYear] = useState("");
  const [modificaciones,setModificaciones] = useState("");
  const [talla,setTalla] = useState("");
  const [material,setMaterial] = useState("");
  const [observaciones,setObservaciones] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  
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
    actions.addbike(tipo,foto, precio, año, modificaciones, talla, material, observaciones);
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
      width: "300px",
      height: "150px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0F1A20",
      color: "white",
      borderColor: "#2FBF71",
    },
  };
  return (
    <>
  {store.auth === false ? 
          <div><p>Muchas gracias por confiar en nosotros! </p>

<p>Pero para poder subir tu bicicleta debes entrar con tu usuario.</p>

<p>Si aún no estás registrado haga click aqui</p> <p><Link to="/signup"><button id="botonSignUp">SignUp</button></Link></p>

<p>Si ya estás registrado entre aquí</p> <p><Link to="/login"><button id="botonLogin">Login</button></Link></p>
            
          </div>
       :
  
  (
    <>
    <h4>Para vender <Link to="/altasalquiler"><button type="button" id="botonForm2">Alquilar</button></Link></h4>

    <div encType="multipart/form-data">
    
   <div className='todo'>
    
    

    <div className="container">
      <div className="mb-3" id="formularioAltas" >
        <label>Tipo de bicicleta</label>
        <p><input type="text" id="inp" placeholder="montaña/carretera..." onChange={(e) => setTipo(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioAltasFoto">
        <label>Foto </label>

        <p><input type="file" id="fotoBici" class="custom-file-input" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => {uploadImage(e)}} required/></p>

      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Precio</label>
        <p><input type="integer" id="inp" placeholder="precio" onChange={(e) => setPrecio (e.target.value)} /></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Año</label>
        <p><input type="text" id="inp" placeholder="Año" onChange={(e) => setYear(e.target.value)}/></p>
      </div>
      
      </div>
       
      <div className="container2">
      <div className="mb-3" id="formularioAltas2">
        <label>Modificaciones/Complementos </label>
        <p><input type="text" id="inp" placeholder=" " onChange={(e) => setModificaciones (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas2">
        <label>Talla</label>
        <p><input type="text" id="inp" placeholder="Talla" onChange={(e) => setTalla(e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas2">
        <label>Material</label>
        <p><input type="text" id="inp" placeholder="Material" onChange={(e) => setMaterial (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas2">
        <label>Observaciones del vendedor </label>
        <p><input size={30} type="text" id="inp" placeholder=" " onChange={(e) => setObservaciones (e.target.value)}/></p>
      </div>
      
      </div>
    </div>
    <button id="botonForm" variant="primary" type='submit' onClick={toggleModal}>
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
          {tipo == ""|| foto =="" || precio == "" || año == ""|| modificaciones == "" || talla == "" || material == "" ? (
            <p className="ter">Campos vacios</p>
          ) : (
            <p className="ter">Su bicicleta de {tipo} ha sido añadida!</p>
          )}
        </div>
        <button id="botonForm2" onClick={cerrar}>
          Close modal
        </button>
      </Modal>
    </div>
    </>
  )}
  </>
  )
}
export default FormAltas;

