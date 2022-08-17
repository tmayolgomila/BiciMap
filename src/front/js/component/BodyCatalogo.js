import React from "react";
import "../../styles/ModalCat.css";

export const CartasCatalogo = () => {
  return (
    <div className="card">
      <div className="header">
        <h3 className="title">Montaña/Carretera</h3>
        <div className="img-box">
          <img
            className="imgBici"
            src="https://graphiccloud.net/wp-content/uploads/2019/05/Bicycle-Logo-Design-Example.png"
          />
        </div>
      </div>

      <div className="content">
        <p>Talla: XS</p>
        <p>Material: Fibra de carbono</p>
        <p>Año: 2021</p>
        <p>Modificaciones: No</p>
        <p>Eléctrica: Si</p>

        <a
          className="btn-link"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Read More...
        </a>
      </div>
      <div className="modal fade backdrop-bg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <img className="imgBici" src="https://graphiccloud.net/wp-content/uploads/2019/05/Bicycle-Logo-Design-Example.png"/></div>
            <div className="modal-body2">
              <p>Talla: XS</p>
              <p>Material: Fibra de carbono</p>
              <p>Año: 2021</p>
              <p>Modificaciones: No</p>
              <p>Eléctrica: Si</p>
          </div>
            <div className="modal-footer">
              <div className="price">Price: 150€</div>
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
    </div>
  );
};
