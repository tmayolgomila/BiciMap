
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";
import "../../styles/pagos.css";





function PagosForm() {
  const{store, actions}= useContext(Context)

  const [titular, setNombre] = useState("")
  const [numTarjeta, setNumTarjeta] = useState("")
  const [FechaExpiracion, setExpiracion] = useState("")
  const [CVV, setCVV] = useState("")


  const handleCardDisplay = () => {
    const rawText = [...numTarjeta.split(' ').join('')]
    const creditCard = [] 
    rawText.forEach((t, i) => {
        if (i % 4 === 0) creditCard.push(' ') 
        creditCard.push(t)
    })
    return creditCard.join('') 
}
  
  return (


    <div className="container">


    <div className="mb-3" id="formularioPago">
      <label>Titular</label>
      <p><input type="text" id="inp" placeholder="" onChange={(e) => setNombre (e.target.value)} required /></p>
    </div>


    <div className="mb-3" id="formularioPago">
      <label>Número de tarjeta</label>
      <p><input pattern="[0-9]{13,16}" value={handleCardDisplay()} type="text" id="inp" placeholder="" onChange={(e) => setNumTarjeta (e.target.value)} required/></p>
    </div>

    <div className="mb-3" id="formularioPago">
      <label>Fecha de expiración</label>
      <p><input type="text" id="inp" placeholder="" onChange={(e) => setExpiracion (e.target.value)} required /></p>
    </div>

    <div className="mb-3" id="formularioPago">
      <label>CVV</label>
      <p><input pattern="[0-9]{3}" type="text" id="inp" placeholder="" onChange={(e) => setCVV (e.target.value)} required /></p>
    </div>


    <button id="botonPago" variant="primary" type="submit" onClick={()=>{ 
        if (CVV.length!=3){
          alert("formato inválido")
        }
        else if(isNaN(CVV)==true){
          alert("CVV deben ser dígitos")
        }
        if (numTarjeta.length <= 16 && numTarjeta.length >=13){
          alert("debe tener entre 13 y 16 dígitos")
        }
        else if(isNaN(numTarjeta)==true){
          alert("error: sólo dígitos")
        }
        if (FechaExpiracion === "" || CVV === "" || titular === "" || numTarjeta === "" ){
          alert("Username/password/email empty")
        }else{
          actions.signup(titular, numTarjeta, CVV)
        }
      }}>
      Pay
    </button>
  </div>

  );
}

export default PagosForm;
