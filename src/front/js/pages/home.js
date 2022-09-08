import React, {useContext, useState, useEffect} from 'react';
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/maps.css";
import { Link } from "react-router-dom";
import App from "../component/App";
import Gallery from "../component/carrousel";

export const Home = () => {
  const {store, actions} = useContext(Context)
  return (
    <>
      <h1>Disfruta de Sevilla en bicicleta</h1>
      <hr></hr>
      <div className="container">
        <div className='galeriaCarrousel'>
        <Gallery/>
        </div>
        
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
