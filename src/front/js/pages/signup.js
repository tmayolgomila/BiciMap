import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/signUp.css";
import { SignUpForm } from "../component/signUpForm";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col text-center mt-5">
					<SignUpForm/>
				</div>
    	</div>
		
	);
};
