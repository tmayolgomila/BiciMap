import React from "react";

export const CartasCatalogo = () => {
  return (
    <div className="card">
      <div className="header">
      <h3 className="title">Montaña/Carretera</h3>
        <div className="img-box">
          <img className="imgBici" src="https://graphiccloud.net/wp-content/uploads/2019/05/Bicycle-Logo-Design-Example.png"/> 
        </div>
        
      </div>

      <div className="content">
        <p>Talla: XS</p>
        <p>Material: Fibra de carbono</p>
        <p>Año: 2021</p>
        <p>Modificaciones: No</p>
        <p>Eléctrica: Si</p>

        <a className="btn-link">Read More...</a>
      </div>
    </div>
  );
};
