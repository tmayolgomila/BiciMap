import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/ModalCat.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { func } from "prop-types";

export const CartasUsers = () => {
  const { store, actions } = useContext(Context);
  const [tipo, setTipo] = useState("");
  const [año, setYear] = useState(null);
  const [modificaciones, setModificaciones] = useState("");
  const [talla, setTalla] = useState("");
  const [material, setMaterial] = useState("");
  const [del, setDel] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setDel(false);
  }, [del]);

  useEffect(() => {
    actions.getBikes();
  }, []);

  function eliminar(id) {
    actions.deleteBikes(id);
    setDel(true);
  }

  function cerrar() {
    setIsOpen(!isOpen);
  }

  function toggleModal(id) {
    actions.editUser(id, tipo, talla, material, año, modificaciones);
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
      width: "350px",
      height: "150px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0F1A20",
      color: "white",
      borderColor: "#2FBF71",
    },
  };

  return (
    <>
      {store.bikes.length > 0 ? (
        store.bikes.map((bk, i) => {
          return localStorage.getItem("jwt-token") === bk.email ? (
            <div className="card2" key={i}>
              <div className="header">
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

                <button
                  className="botonEditar"
                  data-bs-toggle="modal"
                  data-bs-target={"#exampleModal" + i}
                >
                  Editar
                </button>

                <button
                  onClick={() => eliminar(bk.id)}
                  type="button"
                  className="botonEliminar"
                  data-bs-toggle="modal"
                  data-bs-target={"#exampleModal"}
                >
                  Eliminar
                </button>

                <div
                  className="modal fade backdrop-bg"
                  id={"exampleModal"}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4>Su bicicleta ha sido eliminada con éxito</h4>
                      </div>
                     
                    </div>
                  </div>
                </div>
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
                            <option value="" selected>
                              {" "}
                            </option>
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
                            <option value="" selected>
                              {" "}
                            </option>
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
                            <option value="" selected>
                              {" "}
                            </option>
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
                        Cerrar
                      </button>
                      <button
                        onClick={() => toggleModal(bk.id)}
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Modificar
                      </button>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={() => toggleModal(bk.id)}
                        contentLabel="My dialog"
                        style={customStyles}
                        ariaHideApp={false}
                      >
                        <div>
                          {tipo == "" || talla == "" || material == "" ? (
                            <p className="ter">Campos vacios</p>
                          ) : (
                            <p className="ter">
                              Los datos de su bicicleta han sido modificados!
                            </p>
                          )}
                        </div>
                        <button id="botonModal" onClick={cerrar}>
                          Cerrar
                        </button>
                      </Modal>
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
        <h5 className="card-title text-light">
          Aún no ha subido ninguna bicicleta.
        </h5>
      )}
    </>
  );
};
