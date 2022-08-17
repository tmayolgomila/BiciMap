import { useNavigate } from "react-router-dom";
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";

import "../../styles/formularioLogin.css";





function LoginForm() {
  const{store, actions}= useContext(Context)

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  return (


    <div className="container">


    <div className="mb-3" id="formularioLogin">
      <label>Email address </label>
      <p><input type="email" id="inp" placeholder="Enter email" onChange={(e) => setEmail (e.target.value)} /></p>
    </div>


    <div className="mb-3" id="formularioLogin">
      <label>Password </label>
      <p><input type="password" id="inp" placeholder="Password" onChange={(e) => setPassword (e.target.value)}/></p>
    </div>


    <button id="botonForm" variant="primary" type="submit" onClick={()=>{ 
        if (email === "" || password === ""){
          alert("Username/password/email empty")
        }else{
          actions.signup(Nombre, email, password)
        }
      }}>
      Login
    </button>
  </div>

  );
}

export default LoginForm;

