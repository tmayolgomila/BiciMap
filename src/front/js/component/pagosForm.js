import { useNavigate } from "react-router-dom";
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";

import "../../styles/pagos.css";





function PagosForm() {
  const{store, actions}= useContext(Context)







  const [nombre, setNombre] = useState("")
  const [numTarjeta, setNumTarjeta] = useState("")
  const [FechaExpiracion, setExpiracion] = useState("")
  const [CVV, setCVV] = useState("")
  const navigate = useNavigate()
  
  return (


    <div className="container">


    <div className="mb-3" id="formularioPago">
      <label>Nombre</label>
      <p><input type="text" id="inp" placeholder="" onChange={(e) => setNombre (e.target.value)} /></p>
    </div>


    <div className="mb-3" id="formularioPago">
      <label>Número de tarjeta</label>
      <p><input type="integer" id="inp" placeholder="" onChange={(e) => setNumTarjeta (e.target.value)}/></p>
    </div>

    <div className="mb-3" id="formularioPago">
      <label>Fecha de expiración</label>
      <p><input type="integer" id="inp" placeholder="" onChange={(e) => setExpiracion (e.target.value)} /></p>
    </div>

    <div className="mb-3" id="formularioPago">
      <label>CVV</label>
      <p><input type="integer" id="inp" placeholder="" onChange={(e) => setCVV (e.target.value)} /></p>
    </div>


    <button id="botonPago" variant="primary" type="submit" onClick={()=>{ 
        if (FechaExpiracion === "" || CVV === ""){
          alert("Username/password/email empty")
        }else{
          actions.signup(nombre, numTarjeta, CVV)
        }
      }}>
      Pay
    </button>
  </div>

  );
}

export default PagosForm;
