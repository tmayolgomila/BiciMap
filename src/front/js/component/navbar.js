import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar">

        <a className="nav-item" id="burger">
            <Link to="/">
              
                <span>
                <ion-icon size="large" name="home-outline"></ion-icon>
                  
                </span>
              
            </Link>
          </a>
          <a className="nav-item" id="burger">
            <Link to="/altas">
              
                <span>
                  <ion-icon size="large" name="add-circle-outline"></ion-icon>
                  
                </span>
              
            </Link>
          </a>
          <a className="nav-item">
            <Link to="/catalogo">
              
                <span>
                  <ion-icon size="large" name="bicycle-outline"></ion-icon>
                  
                </span>
              
            </Link>
          </a>
          <a className="nav-item">
            <Link to="/contact">
              
                <span>
                  <ion-icon className="icono" size="large" name="call-outline"></ion-icon> 
                </span>
              
            </Link>
          </a>
          <a className="nav-item">
            <Link to="/aboutus">
              
                <span>
                  <ion-icon
                    size="large"
                    name="information-circle-outline"
                  ></ion-icon>
                  
                </span>
              
            </Link>
          </a>
          
          <a className="nav-item">
            <Link to="/user">
            
                <span>
                <ion-icon size="large" name="person-outline"></ion-icon>
                
                  
                </span>
              
            </Link>
          </a>
      
    </nav>
    
  );
};
