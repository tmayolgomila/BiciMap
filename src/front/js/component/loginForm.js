import { useNavigate } from "react-router-dom";
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";
import "../../styles/formularioLogin.css";




function LoginForm() {
  const{store, actions}= useContext(Context)

  const [username, setUsername] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  return (
      <div id="cuerpoForm">
      
      <div className="mb-3" id="formularioLogin">

        <label>Email</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter email" />
     </div>
      <div className="mb-3" id="formularioLogin">
       <label>Password</label>
       <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
    </div>
      <button id="botonForm" variant="primary" type="submit" onClick={()=>{
      if(email === "" || password === ""){
      alert("campos vacios, rellenar")
      }else{

       actions.login(username,password, navigate)

       actions.login(email,password, navigate)

};
}}>
Login
</button>
      
      </div>
  
  );
}

export default LoginForm;

