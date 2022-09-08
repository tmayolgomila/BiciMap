import React, {useContext, useState, useEffect} from 'react';
import { Context } from "../store/appContext";
import "../../styles/ModalCat.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const CartasCatalogo = () => {
  const { store, actions } = useContext(Context);

 
  return (
    <>
      {store.bikes.length > 0 ? (
        store.bikes.map((bk, i) => {
          return (
            <div className="card" key={i}>
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

                <a
                  className="btn-link"
                  data-bs-toggle="modal"
                  data-bs-target={"#exampleModal" + i}
                >
                  Detalles
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
                      <p>Tipo: {bk.tipo}</p>
                      <p>Talla: {bk.talla}</p>
                      <p>Material: {bk.material}</p>
                      {bk.año === null ? (
                        <p>Dispobible hasta: {bk.fechalimite}</p>
                      ) : (
                        <p>Año: {bk.año}</p>
                      )}
                      <p>Modificaciones: {bk.modificaciones}</p>
                    </div>
                    <div className="modal-footer">
                { bk.año === null ? (<div className="price">30 céntimos el uso</div>):(<div className="price">Price: {bk.precio}</div>)}
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                <Link to={store.auth === false ? "/login" : "/pagos" }> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => actions.pagos(bk.id)}>
                { bk.año === null ? ("Alquilar"):("Comprar")}
                  </button></Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h5 className="card-title text-light">Loading...</h5>
      )}
    </>
  );
};
