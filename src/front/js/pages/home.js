import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/maps.css";
import { Link } from "react-router-dom";
import App from "../component/App";

export const Home = () => {
return(
  
  <div className="container">
       <hr id="hrInicio"></hr>     
  <Link to="signup"><button id="botonSignUp">SignUp</button></Link>
  
  <Link to="login"><button id="botonLogin">Login</button></Link>
    <App />
  
  </div>
);
}



