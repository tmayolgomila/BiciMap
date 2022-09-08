import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import "../../styles/formularioLogin.css";

function LoginForm() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function cerrar (){
    setIsOpen(!isOpen);
}

  function toggleModal() {
    actions.login(email, password)
    setIsOpen(!isOpen);
  }

  const customStyles = {
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(15, 26, 32, 0.75)'
      
    },
    content: {
      top: '25%',
      left: '50%',
      width: "300px",
      height: "150px",
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#0F1A20",
      color: "white",
      borderColor: "#2FBF71" 
    },
  };

  return (
    <>
    <div className="container">
      <div className="mb-3" id="formularioLogin">
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

      <div className="mb-3" id="formularioLogin">
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

      <button
        id="botonForm4"
        variant="primary"
        type="submit"
        onClick={toggleModal}
      >
        Login
      </button>

      <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
              style={customStyles}
              ariaHideApp={false}
            >
              <div>{email == "" || password == "" ? <p className="ter">Campos vacios</p> : <p className="ter">Bienvenido! {email}</p>}</div>
              <Link to="/altas" id="quitarDecoracion"><button id="botonModal" onClick={cerrar}>Cerrar</button></Link>
            </Modal>
    </div>
    </>
  );
}

export default LoginForm;
