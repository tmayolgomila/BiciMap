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
          }
        }}
      >
        Login
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
