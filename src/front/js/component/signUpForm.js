import { Action } from "history";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signUp.css";
import Modal from "react-modal";

export const SignUpForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    actions.signup(nombre, apellidos, email, telefono, password);
    setIsOpen(!isOpen);
  }

  const customStyles = {
    overlay: {
      position: "fixed",
      backgroundColor: "rgba(15, 26, 32, 0.75)",
    },
    content: {
      top: "25%",
      left: "50%",
      width: "300px",
      height: "150px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0F1A20",
      color: "white",
      borderColor: "#2FBF71",
    },
  };

  return (
    <form>
    <div className="container">
      <div className="mb-3" id="formularioSignUp">
        <label>Nombre </label>
        <p>
          <input
            type="text"
            id="inp"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </p>
      </div>
      <div className="mb-3" id="formularioSignUp">
        <label>Apellidos </label>
        <p>
          <input
            type="text"
            id="inp"
            placeholder="Apellidos"
            onChange={(e) => setApellidos(e.target.value)}
          />
        </p>
      </div>
      <div className="mb-3" id="formularioSignUp">
        <label>Email address </label>
        <p>
          <input
            type="email"
            id="inp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
      </div>
      <div className="mb-3" id="formularioSignUp">
        <label>Teléfono </label>
        <p>
          <input
            type="text"
            id="inp"
            placeholder="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </p>
      </div>
      <div className="mb-3" id="formularioSignUp">
        <label>Password </label>
        <p>
          <input
            type="password"
            id="inp"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      </div>
      <button id="botonForm" variant="primary" type="submit" onClick={toggleModal}>
        Registrarse
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <div>
          {email == "" || password == "" || nombre == "" || apellidos == "" || telefono == "" ? (
            <p className="ter">Campos vacios</p>
          ) : (
            <p className="ter">Bienvenido! {nombre}</p>
          )}
        </div>
        <button id="botonForm2" onClick={toggleModal}>
          Close modal
        </button>
      </Modal>
      ;
    </div>
    </form>
  );
};

export default SignUpForm;
