import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/estaciones.css";

export const InfoEstacion = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getEstaciones();
  }, []);
  console.log(store.estaciones);
  return (
    <>
      {store.estaciones.map((est) => {
        return (
          <div id="bicisMenu">
            <ul>
            <li>Estación: {est.direccion}</li>
            <li>Nº bicis disponibles: {est.numeroBicis}</li>
            <li>Nº total parkings: {est.numeroParkings}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
