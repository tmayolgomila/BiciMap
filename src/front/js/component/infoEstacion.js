import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/estaciones.css";

export default function InfoEstacion ({id})  {
  const { store, actions } = useContext(Context);
  const [estacion, setEstacion ]= useState(0)
  useEffect(() => {
    actions.getEstaciones();
    const idEstacion = store.estaciones.filter((est) => {
      return est.id!=id} );
    console.log(id, "id")
    console.log(store.estaciones)
   console.log(idEstacion, "idEStacion")
    setEstacion(idEstacion)
  }, []);
  console.log(store.estaciones);
  let x;
  return (

    <>

      
      <div id="bicisMenu">
           
        <ul>{x = store.estaciones.find((est) => est.id==id)}
        
          <li>Estación:</li>
          <li>Nº bicis disponibles: </li>
          <li>Nº total parkings: </li>
        </ul>
      </div>
      
    </>
    
  );
};
