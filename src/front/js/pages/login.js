import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../component/loginForm";
import { Context } from "../store/appContext";
import "../../styles/formularioLogin.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
	<>
	<h1>Login</h1>
	<hr></hr>
	<div className="col text-center mt-5">
		<LoginForm/>
	</div>
	<hr></hr>
	</>
	
		
	);
};
