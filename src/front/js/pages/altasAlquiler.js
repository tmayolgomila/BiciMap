import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FormAlquiler from "../component/alquilerForm";
import { Context } from "../store/appContext";

import "../../styles/alquiler.css";


export const AltasAlquiler = () => {
	const { store, actions } = useContext(Context);

	return (

	<>
	<h1>Sube tu Bicicleta</h1>
	<hr></hr>
	<div className="col text-center mt-5">
		
	
	<FormAlquiler/>

		
	</div>
	<hr></hr>
	</>
	

	);
};
