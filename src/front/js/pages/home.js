import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/maps.css";
import { Link } from "react-router-dom";
import App from "../component/App";
import Gallery from "../component/carrousel";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <h1 className="logo">BiciMap</h1>
      <h3 className="subLogo" >Compra, alquila y vende tu bici</h3>
      <div className="container">
        <div className="galeriaCarrousel">
          <Gallery />
        </div>
        {localStorage.getItem("jwt-token") == null ? (
          <div>
            <Link to="signup">
              <button id="botonSignUp">SignUp</button>
            </Link>

            <Link to="login">
              <button id="botonLogin">Login</button>
            </Link>
          </div>
        ) : (
          <>
            <hr></hr>
          </>
        )}
        <App />
      </div>
    </>
  );
};
