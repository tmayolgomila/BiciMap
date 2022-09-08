import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/estaciones.css";
import { InfoEstacion } from "./infoEstacion";

export const Estaciones = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getBikes();
  }, []);
  return (
    <>
      <div className="vertical-menu">
        <InfoEstacion />
        {store.bikes.map((bk) => {
          return (
            <div id="bicisMenu">
              <span><ion-icon name="bicycle-outline" id="iconoBici"></ion-icon></span>  Nº:  {bk.id} Talla: {bk.talla}
              
                
              
            </div>
          );
        })}
      </div>
    </>
  );
};
