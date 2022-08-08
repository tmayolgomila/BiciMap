import { useNavigate } from "react-router-dom";
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";




function LoginForm() {
  const{store, actions}= useContext(Context)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  return (
    <>
  <div className="mb-3">
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
      actions.login(email,password, navigate)
    };
  }}>
    Login
  </button>
</>
  );
}

export default LoginForm;