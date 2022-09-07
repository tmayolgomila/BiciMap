import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/estaciones.css";

export default function InfoEstacion ({id})  {
  const { store, actions } = useContext(Context);
  const [estacion, setEstacion ]= useState(0)
  //const [est, setEst] = useState([])
  
  useEffect(() => {
    actions.getEstaciones()
    actions.getBikes()

  
  },[])
  

    

  return (

    <>

      
      <div id="bicisMenu">
           
        
        { store.estaciones.map((est) => {

          return((est.id===id)  ? (
            <ul>
          <li>Calle: {est.direccion}</li>
          <li>Estacion: {est.id}</li>
          <li>Nº Parkings: {est.numeroParkings}</li>
          </ul> ) : "" )
          
          
        })}
        
        </div>
      
        </>
    
  );
};
