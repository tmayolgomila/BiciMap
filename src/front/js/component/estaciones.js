import React, { useCallback, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/estaciones.css";



export const Estaciones = () => {
  const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getBikes();
    },[]);
    console.log(store.bikes)
	return (

<>
<div className="vertical-menu">
  <p href="#">Estación 1</p>
  {store.bikes.map((bk)=> {return(
    <>
    {bk.id}
     <p href="#"><ion-icon name="bicycle-outline"></ion-icon></p>
     </>)
    })}
 
  
</div>

</>
		
    );
};
