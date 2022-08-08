import { useNavigate } from "react-router-dom";
import React,{ useContext, useState } from 'react';
import { Context } from "../store/appContext";




function LoginForm() {
  const{store, actions}= useContext(Context)
<<<<<<< HEAD
  const [username, setUsername] = useState("")
=======
  const [email, setEmail] = useState("")
>>>>>>> login
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  return (
    <>
  <div className="mb-3">
<<<<<<< HEAD
    <label>Email</label>
    <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter email" />
=======
    <label>email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email" />
>>>>>>> login
  </div>
  <div className="mb-3">
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
  <button variant="primary" type="submit" onClick={()=>{
    if(email === "" || password === ""){
      alert("campos vacios, rellenar")
    }else{
<<<<<<< HEAD
      actions.login(username,password, navigate)
=======
      actions.login(email,password, navigate)
>>>>>>> login
    };
  }}>
    Login
  </button>
</>
  );
}

export default LoginForm;