import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Maps } from "../component/maps";
import { Altas } from "./altas";

export const Home = () => {
  const { store, actions } = useContext(Context);


	return (
		<div className="text-center mt-5">

			<Maps />
			
			

		</div>
	);

  

};
