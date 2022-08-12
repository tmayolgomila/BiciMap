import { Action } from 'history';
import React, {useContext, useState} from 'react';
import { Context } from '../store/appContext';
import "../../styles/alquiler.css";



function FormAlquiler() { 
  const {store, actions} = useContext(Context)
  const [tipo,setTipo] = useState("");
  const [precio,setPrecio] = useState("");
  const [year,setYear] = useState("");
  const [Modificaciones,setModificaciones] = useState("");
  const [Talla,setTalla] = useState("");
  const [Material,setMaterial] = useState("");
  const [Observaciones,setObservaciones] = useState("");

  

  return (
   
    <>

    <h4>Para alquilar</h4>
    <div className='todo'>
    <div className="container">
      <div className="mb-3" id="formularioAltas" >
        <label>Tipo de bicicleta</label>
        <p><input type="text" id="inp" placeholder="montaña/carretera..." onChange={(e) => setTipo(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioAltasFoto">
        <label>Foto </label>
        <p><input  type="file" id="fotoBici" class="custom-file-input" accept="image/x-png,image/gif,image/jpeg" required/></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Talla</label>
        <p><input type="text" id="inp" placeholder="Talla" onChange={(e) => setTalla(e.target.value)}/></p>
      </div>
      <button id="botonForm3" variant="primary" type="submit" onClick={()=>{ 
          if (tipo == "" ||  precio == "" || year == "" || talla == ""){
            alert("Campos vacios, rellenar porfavor")
          }else{
            actions.signup(tipo, precio, year, talla)
          }
        }}>
        Subir 
      </button>
      </div>
      <div className="container2">
      <div className="mb-3" id="formularioAltas">
        <label>Material</label>
        <p><input type="text" id="inp" placeholder="Material" onChange={(e) => setMaterial (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Observaciones del vendedor </label>
        <p><input size={25} type="text" id="inp" placeholder=" " onChange={(e) => setObservaciones (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Fecha límite de alquiler</label>
        <p><input type="text" id="inp" placeholder=" " onChange={(e) => setObservaciones (e.target.value)}/></p>
      </div>
      <div className="mb-3" id="formularioAltas">
        <label>Electrica</label>
        <p><input type="checkbox"/></p>
      </div>

      
      </div>
    </div>
    </>

    
  );
}
export default FormAlquiler;

