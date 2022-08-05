import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
<<<<<<< HEAD
			
=======
			<img src="https://img.huffingtonpost.com/asset/61890c40200000fd798d217f.png?ops=1778_1000" />
>>>>>>> refs/remotes/origin/desarrollo
		</div>
	);
};
