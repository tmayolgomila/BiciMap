import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "./modal";

import "../../styles/formularioLogin.css";

function LoginForm() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        id="botonForm"
        variant="primary"
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          if (email === "" || password === "") {
            //alert("Password o email vacio");
          } else {
            actions.login(email, password);
            <Modal setIsOpen={setIsOpen}/>
          }
        }}
      >
        Login
      </button>

       
    </div>
  );
}

export default LoginForm;
