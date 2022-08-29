import React from "react";
import { useState } from "react";
import "../../styles/filters.css";

export const FiltroCatalogo = () => {
    
  return (
    <>
    <div className="App">
    <h3>Tipo:</h3>
      <div className="Tipo">
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Montaña"
            value="Montaña"
            />
            Montaña
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Carretera"
            value="Carretera"
            />
            Carretera
        </div>
      </div>
      
    </div>
    <hr/>
    <div className="App">
      <h3>Talla:</h3>
      <div className="Tipo">
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="XS"
            value="XS"
            />
            XS
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="S"
            value="S"
            />
            S
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="M"
            value="M"
            />
            M
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="L"
            value="L"
            />
            <>L</>
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="XL"
            value="XL"
            />
            XL
        </div>
      </div>
    </div>
    <hr/>
    <div className="App">
      <h3>Material:</h3>
      <div className="Tipo">
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Aluminio"
            value="Aluminio"
            />
            Aluminio
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Acero"
            value="Acero"
            />
            Acero
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Fibra de Carbono"
            value="Fibra de Carbono"
            />
            Fibra de Carbono
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Titanio"
            value="Titanio"
            />
            <>Titanio</>
        </div>
        <div>
            <input
            type="checkbox"
            id="Tipos"
            name="Otros"
            value="Otros"
            />
            Otros
        </div>
      </div>
    </div>
    <hr/>
    </>
  );

}