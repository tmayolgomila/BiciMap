import { useNavigate } from "react-router-dom";
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";
import "../../styles/formularioLogin.css";




function LoginForm() {
  const{store, actions}= useContext(Context)
<<<<<<< HEAD

  const [username, setUsername] = useState("")

  const [email, setEmail] = useState("")

=======
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
>>>>>>> signup
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  return (
<<<<<<< HEAD
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
  
=======
    <>
  <div className="mb-3">
    <label>Email</label>
    <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter email" />
    <label>email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email" />
  </div>
  <div className="mb-3">
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
  <button variant="primary" type="submit" onClick={()=>{
    if(email === "" || password === ""){
      alert("campos vacios, rellenar")
    }else{
      actions.login(username,password, navigate)
      actions.login(email,password, navigate)
    };
  }}>
    Login
  </button>
</>
>>>>>>> signup
  );
}

export default LoginForm;

