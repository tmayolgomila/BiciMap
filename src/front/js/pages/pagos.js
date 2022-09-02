import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PagosForm from "../component/pagosForm";
import { Context } from "../store/appContext";

import "../../styles/formularioLogin.css";


export const Pagos = () => {
	const { store, actions } = useContext(Context);

	return (

	<>
	<h1>Pago con tarjeta</h1>
	
	<div className="col text-center mt-5">
		<PagosForm/>
	</div>
	
	</>
	

	);
};
