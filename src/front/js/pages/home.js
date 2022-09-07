import React, {useContext, useState, useEffect} from 'react';
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/maps.css";
import { Link } from "react-router-dom";
import App from "../component/App";

export const Home = () => {
  const {store, actions} = useContext(Context)
  return (
    <>
      <h1>Disfruta de Sevilla en bicicleta</h1>
      <hr></hr>
      <div className="container">
        <p>Para una escapada por el campo o para ir por la ciudad.</p>
        <p>¿Tienes una bicicleta sin usar? </p>
        <p>¿Quieres vender tu bicicleta?</p>
        <p>Traenos tu bicicleta y nosotros lo gestionamos.</p>

        {store.auth === true ? (
          <></>
        ) : (
          <div>
            <Link to="signup">
              <button id="botonSignUp">SignUp</button>
            </Link>

            <Link to="login">
              <button id="botonLogin">Login</button>
            </Link>
          </div>
        )}
        <App />
      </div>
    </>
  );
};
