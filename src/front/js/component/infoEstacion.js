import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/estaciones.css";

export default function InfoEstacion ({id})  {
  const { store, actions } = useContext(Context);
  const [estacion, setEstacion ]= useState(0)
  useEffect(() => {
    actions.getEstaciones()},[])
   
  return (

    <>

      
      <div id="bicisMenu">
           
        <ul>{ store.estaciones.map((est) => {
          //console.log(id, "id")
          //console.log(est.id, "est.id")
          (est.id===id)  ? (<div>cumple</div>) : (<p>no cumple</p>) 
          
        })}
        </ul>
        </div>
      
        </>
    
  );
};
