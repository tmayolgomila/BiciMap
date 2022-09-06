import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/catalogo.css";
import { CartasUsers } from "../component/bodyUser";
import { Link } from "react-router-dom";

export const VistaUser = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBikes();
  }, []);

  return (
    <>
      {store.auth === false ? (
        <div>
          <p>Esta zona es solamente para usuarios registrados </p>
          <p>Si aún no estás registrado haga click aqui</p>{" "}
          <p>
            <Link to="/signup">
              <button id="botonSignUp">SignUp</button>
            </Link>
          </p>
          <p>Si ya estás registrado entre aquí</p>{" "}
          <p>
            <Link to="/login">
              <button id="botonLogin">Login</button>
            </Link>
          </p>
        </div>
      ) : (
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col ">
              <div className="marginCards wrapper">
                <CartasUsers/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};