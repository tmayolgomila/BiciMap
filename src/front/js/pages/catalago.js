import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/catalogo.css";

import { CartasCatalogo } from "../component/BodyCatalogo";
import { FiltroCatalogo } from "../component/filters";

export const Catalogo = () => {
  const { store, actions } = useContext(Context);

  console.log(store.Catalogo)

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col text-start"> 
        
        <FiltroCatalogo/> </div>
        <div className="col">
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
          
        </div>
        <div className="col ">
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
        </div>
        <div className="col">
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
            <div className="marginCards"><CartasCatalogo /></div>
        </div>
      </div>
    </div>
  );
};
