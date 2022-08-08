import { Action } from 'history';
import React, {useContext, useState} from 'react';
import { Context } from '../store/appContext';



export const SignUpForm = () => { 
  const {store, actions} = useContext(Context)
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [Nombre,setNombre] = useState("");
  const [Apellidos,setApellidos] = useState("");
  const [Telefono,setTelefono] = useState("");

  

  return (
    <div className="container">
      <div className="mb-3" >
        <label>Nombre</label>
        <input type="text" placeholder="Introduzca su nombre" onChange={(e) => setNombre(e.target.value)}/>
      </div>

      <div className="mb-3" >
        <label>Apellidos</label>
        <input type="text" placeholder="Introduzca sus apellidos" onChange={(e) => setApellidos(e.target.value)}/>
      </div>

      <div className="mb-3" >
        <label>Email address</label>
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail (e.target.value)} />
      </div>

      <div className="mb-3" >
        <label>Teléfono</label>
        <input type="text" placeholder="Introduzca su Número de teléfono" onChange={(e) => setTelefono(e.target.value)}/>
      </div>

      <div className="mb-3" >
        <label>Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword (e.target.value)}/>
      </div>
    

      <button variant="primary" type="submit" onClick={()=>{ 
          if (email == ""  || password == "" || Nombre == "" || Apellidos == ""){
            alert("Username/password/email empty")
          }else{
            actions.signup(Nombre, email, password)
          }
        }}>
        Submit
      </button>
    </div>
  );
}

export default SignUpForm;