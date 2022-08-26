import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/footer.css";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


export const Footer = () => {
	const { store, actions } = useContext(Context);

	return(
  <footer className="footer mt-auto py-3 text-center">
	<hr/>
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
				<i className="fa-brands fa-square-twitter"></i>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 texto">{store.auth == false ? <span className="Nosotros">No está logueado!</span> : <p className="ter">Bienvenido! {store.email}</p>}</span>
		  <span className="mb-3 mb-md-0 texto">{store.auth == false ? <></> : <button className="Logout" variant="primary" type="submit" onClick={actions.logout}>Logout</button>}</span>
		  {console.log(store.auth)}
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
		<span className="Nosotros">Tomeu Mayol Gomila</span>
          <li className="ms-3">
            <a href="https://github.com/tmayolgomila">
				<ion-icon name="logo-github" id="git"></ion-icon>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/tomeu-mayol-gomila-272565238/">
			<ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
            </a>
          </li>
        </ul>
		<ul className="nav col-md-4 justify-content-end list-unstyled d-flex" id="borbot">
		<span className="Nosotros">Ignacio García-Conde Fernández</span>
          <li className="ms-3">
            <a href="https://github.com/naxinga">
				<ion-icon name="logo-github" id="git"></ion-icon>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/nacho-garc%C3%ADa-conde-fern%C3%A1ndez-591013173/">
			<ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </footer>
  );
	}
