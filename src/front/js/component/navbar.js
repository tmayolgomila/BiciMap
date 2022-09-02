import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import "../../styles/responsive-nav.css";


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="burger">
      
        <button className="logo">
          <Link to="/">
            BiciMap
          </Link>
        </button>
     
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ms-auto pe-5" id="burger">
          <li className="nav-item" id="burger">
            <Link to="/altas">
              
                <span>
                  <ion-icon size="large" name="add-circle-outline"></ion-icon>
                  
                </span>
              
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/catalogo">
              
                <span>
                  <ion-icon size="large" name="bicycle-outline"></ion-icon>
                  
                </span>
              
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/catalogo">
              
                <span>
                  <ion-icon className="icono" size="large" name="call-outline"></ion-icon> 
                </span>
              
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus">
              
                <span>
                  <ion-icon
                    size="large"
                    name="information-circle-outline"
                  ></ion-icon>
                  
                </span>
              
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
    
  );
};
