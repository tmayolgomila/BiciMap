import { Action } from 'history';
import React, {useContext, useState} from 'react';
import { Context } from '../store/appContext';
import "../../styles/altas.css";



function FormAltas() { 
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
    <h4>Para vender</h4>
   <div className='todo'>
    
    

    <div className="container">
      <div className="mb-3" id="formularioAltas" >
        <label>Tipo de bicicleta</label>
        <p><input type="text" id="inp" placeholder="montaña/carretera..." onChange={(e) => setTipo(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioAltasFoto">
        <label>Foto </label>
        <p><input type="file" id="fotoBici" class="custom-file-input" accept="image/x-png,image/gif,image/jpeg" required/></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Precio</label>
        <p><input type="integer" id="inp" placeholder="precio" onChange={(e) => setYear (e.target.value)} /></p>
      </div>

      <div className="mb-3" id="formularioAltas">
        <label>Año</label>
        <p><input type="text" id="inp" placeholder="Año" onChange={(e) => setYear(e.target.value)}/></p>
      </div>
      <button id="botonForm" variant="primary" type="submit" onClick={()=>{ 
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
      <div className="mb-3" id="formularioAltas2">
        <label>Electrica</label>
        <p><input type="checkbox"/></p>
      </div>
      
      
      </div>
    </div>
    </>
    
  );
}
export default FormAltas;

