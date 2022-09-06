import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/ModalCat.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const CartasUsers = () => {
  const { store, actions } = useContext(Context);
  const [tipo, setTipo] = useState("");
  const [año, setYear] = useState("");
  const [modificaciones, setModificaciones] = useState("");
  const [talla, setTalla] = useState("");
  const [material, setMaterial] = useState("");

  return (
    <>
      {store.bikes.length > 0 ? (
        store.bikes.map((bk, i) => {
          return store.email === bk.email ? (
            <div className="card" key={i}>
              <div className="header">
                {console.log(bk.id, "bk.id")}
                <img className="imgBici" src={bk.foto} />
              </div>

              <div className="content">
                <p className="title">{bk.tipo}</p>
                <p>Talla: {bk.talla}</p>
                <p>Material: {bk.material}</p>
                {bk.año === null ? (
                  <p>Solo alquiler</p>
                ) : (
                  <p>Bicicleta en venta</p>
                )}

                <a
                  className="btn-link"
                  data-bs-toggle="modal"
                  data-bs-target={"#exampleModal" + i}
                >
                  Modificar tu bicicleta
                </a>
              </div>
              <div
                className="modal fade backdrop-bg"
                id={"exampleModal" + i}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Detalles de la bicicleta
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img className="imgBici" src={bk.foto} />
                    </div>
                    <div className="modal-body2">
                      <div className="mb-3" id="formularioAltas2">
                        <label>Tipo</label>
                        <p>
                          <select
                            type="text"
                            className="cajas"
                            placeholder={bk.tipo}
                            onChange={(e) => setTipo(e.target.value)}
                          >
                            <option value="Montaña">Montaña</option>
                            <option value="Carretera">Carretera</option>
                          </select>
                        </p>
                      </div>

                      <div className="mb-3" id="formularioAltas2">
                        <label>Talla</label>
                        <p>
                          <select
                            type="text"
                            className="cajas"
                            placeholder={bk.talla}
                            onChange={(e) => setTalla(e.target.value)}
                          >
                            <option value="XL">XL</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                            <option value="XS">XS</option>
                          </select>
                        </p>
                      </div>
                      <div className="mb-3" id="formularioAltas2">
                        <label>Material</label>
                        <p>
                          <select
                            type="text"
                            className="cajas"
                            placeholder={bk.material}
                            onChange={(e) => setMaterial(e.target.value)}
                          >
                            <option value="Aluminio">Aluminio</option>
                            <option value="Acero">Acero</option>
                            <option value="Fibra de Carbono">
                              Fibra de Carbono
                            </option>
                            <option value="Titanio">Titanio</option>
                            <option value="Otro">Otro</option>
                          </select>
                        </p>
                      </div>
                      {bk.año === null ? (
                        <p>Dispobible hasta: {bk.fechalimite}</p>
                      ) : (
                        
                        <div className="mb-3" id="formularioAltas2">
                        <label>Año </label>
                        <p>
                          <input
                            type="text"
                            className="cajas"
                            placeholder={bk.año}
                            onChange={(e) => setYear(e.target.value)}
                          />
                        </p>
                      </div>
                      )}
                      <div className="mb-3" id="formularioAltas2">
                        <label>Modificaciones/Complementos </label>
                        <p>
                          <input
                            type="text"
                            className="cajas"
                            placeholder={bk.modificaciones}
                            onChange={(e) => setModificaciones(e.target.value)}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        onClick={() =>
                          actions.editUser(
                            bk.id,
                            tipo,
                            talla,
                            material,
                            año,
                            modificaciones
                          )
                        }
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Modificar
                      </button>
                      <Link to="/user">
                        <button
                          onClick={() => actions.deleteBikes(bk.id)}
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Eliminar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })
      ) : (
        <h5 className="card-title text-light">Loading...</h5>
      )}
    </>
  );
};
