import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FormAltas  from "../component/altasForm";
import { Context } from "../store/appContext";

import "../../styles/altas.css";


export const Altas = () => {
	const { store, actions } = useContext(Context);

	return (

	<>
	<h1>Sube tu Bicicleta</h1>
	<hr></hr>
	<div className="col text-center mt-5">
		<FormAltas/>
	</div>
	<hr></hr>
	</>
	

	);
};
