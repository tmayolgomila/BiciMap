import { Action } from 'history';
import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/signUp.css";


export const SignUpForm = () => { 
  const {store, actions} = useContext(Context)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [nombre,setNombre] = useState("")
  const [apellidos,setApellidos] = useState("")
  const [telefono,setTelefono] = useState("")

  

  return (
    <div className="container">
      <div className="mb-3" id="formularioSignUp" >
        <label>Nombre </label>
        <p><input type="text" id="inp" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioSignUp">
        <label>Apellidos </label>
        <p><input type="text" id="inp" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioSignUp">
        <label>Email address </label>
        <p><input type="email" id="inp" placeholder="Enter email" onChange={(e) => setEmail (e.target.value)} /></p>
      </div>

      <div className="mb-3" id="formularioSignUp">
        <label>Teléfono </label>
        <p><input type="text" id="inp" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)}/></p>
      </div>

      <div className="mb-3" id="formularioSignUp">
        <label>Password </label>
        <p><input type="password" id="inp" placeholder="Password" onChange={(e) => setPassword (e.target.value)}/></p>
      </div>

      
      <button id="botonForm" variant="primary" type="submit" onClick={()=>{ 
          if (email == "" ||  password == "" || nombre == "" || apellidos == ""){
            alert("Username/password/email empty")
          }else{
            actions.signup(nombre,apellidos, email, password, telefono)
          }
        }}>
        Registrarse
      </button>
    </div>
  );
}

export default SignUpForm;