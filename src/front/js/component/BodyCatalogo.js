import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/ModalCat.css";

export const CartasCatalogo = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    {store.bikes.length >0 ? store.bikes.map((bk,i) => {
      return(<div className="card" key={i}>
          <div className="header">
            <div className="img-box">
              <img
                className="imgBici"
                src={bk.foto}
              />
            </div>
          </div>
    
          <div className="content">
            <p className="title">{bk.tipo}</p>
            <p>Talla: {bk.talla}</p>
            <p>Material: {bk.material}</p>
            <p>Año: {bk.año}</p>
    
            <a
              className="btn-link"
              data-bs-toggle="modal"
              data-bs-target={"#exampleModal"+i}
            >
              Detalles
            </a>
          </div>
          <div className="modal fade backdrop-bg" id={"exampleModal"+i} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Mi bicicleta
                  </h5>
                  <button
                    type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img className="imgBici" src={bk.foto}/></div>
                <div className="modal-body2">
                  <p>Tipo: {bk.tipo}</p>
                  <p>Talla: {bk.talla}</p>
                  <p>Material: {bk.material}</p>
                  <p>Año: {bk.año}</p>
                  <p>Modificaciones: {bk.modificaciones}</p>
              </div>
                <div className="modal-footer">
                  <div className="price">Price: {bk.precio}</div>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> )
    }): <h5 className="card-title text-light">Loading...</h5>}

</>
  );
};
