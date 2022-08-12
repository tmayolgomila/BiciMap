import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Maps } from "../component/maps";
import { MenuVertical } from "../component/menuVertical";

export const Home = () => {
  const { store, actions } = useContext(Context);


	return (
		<div className="text-center mt-5">
			<MenuVertical/>
			<Maps />

		</div>
	);

  

};
