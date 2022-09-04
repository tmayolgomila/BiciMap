import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/signUp.css";
import { SignUpForm } from "../component/signUpForm";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
            <h1 id="titulo">Registro</h1>
            <hr id="titulo" />
            <div className="col text-center mt-3">
                    <SignUpForm/>
            </div>
        </div>
		
	);
};
