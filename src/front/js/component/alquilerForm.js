import { Action } from 'history';
import React, {useContext, useState} from 'react';
import { Context } from '../store/appContext';
import "../../styles/alquiler.css";
import Modal from "react-modal";


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
  const [image, setImage] = useState("")
  
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
    console.log(file, "file")
    setImage(file.secure_url)
    setLoading(false)
    }


  function toggleModal() {
    actions.rentabike(tipo, foto, talla, material, observaciones, fechalimite);
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
   
    <form>

    <h4>Para alquilar</h4>
    <div className='todo'>
    <div className="container">
      <div className="mb-3" id="formularioAltas" >
        <label>Tipo de bicicleta</label>
        <p><input type="text" id="inp" placeholder="montaña/carretera..." onChange={(e) => setTipo(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioAltasFoto">
        <label>Foto </label>
        <p><input  type="file" id="fotoBici" class="custom-file-input" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => {setFoto(e.target.value), {uploadImage}}} required/></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Talla</label>
        <p><input type="text" className="inp" placeholder="Talla" onChange={(e) => setTalla(e.target.value)}/></p>
      </div>
      
      </div>
      <div className="container2">
      <div className="mb-3" id="formularioAltas">
        <label>Material</label>
        <p><input type="text" className="inp" placeholder="Material" onChange={(e) => setMaterial (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Observaciones del vendedor </label>
        <p><input size={25} type="text" className="inp" placeholder=" " onChange={(e) => setObservaciones (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Fecha límite de alquiler</label>
        <p><input type="text" className="inp" placeholder=" " onChange={(e) => setLimite (e.target.value)}/></p>
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
        
      >
        <div>
          {tipo == "" || foto == "" || talla == "" || material == "" ? (
            <p className="ter">Campos vacios</p>
          ) : (
            <p className="ter">Su bicicleta de {tipo} ha sido añadida!</p>
          )}
        </div>
        <button id="botonForm2" onClick={toggleModal}>
          Close modal
        </button>
      </Modal>
    </form>

    
  );
}
export default FormAlquiler;

