import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/catalogo.css";

import { CartasCatalogo } from "../component/BodyCatalogo";
import { FiltroCatalogo } from "../component/filters";

export const Catalogo = () => {
  const { store, actions } = useContext(Context);

  useEffect( () => {
    actions.getBikes();
  }, []);
  console.log(store.bikes)

  return (
    <div className="container text-center mt-5">
      <div className="row">
        
        <div className="col ">
            <div className="marginCards wrapper"><CartasCatalogo /></div>          
        </div>
      </div>
    </div>
  );
};
