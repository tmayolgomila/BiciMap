import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/maps.css";
import { Link } from "react-router-dom";
import App from "../component/App";


export const Home = () => {

return(
  
  <div className="container">
    
  <Link to="signup"><button id="botonSignUp">SignUp</button></Link>
  
  <Link to="login"><button id="botonLogin">Login</button></Link>
    <App />
  

  </div>
);
}



