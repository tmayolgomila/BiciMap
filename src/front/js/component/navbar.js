import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export const Navbar = () => {
	return (
		<div className="navigation">
        <ul>
            <li className="list active">
				<Link to="/">
                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span className="text">Home</span>
                </Link>
            </li>
            <li className="list">
			<Link to="/demo">
                    <span className="icon"><ion-icon name="bicycle-outline"></ion-icon></span>
                    <span className="text">Services</span>
                </Link>
            </li>
            <li className="list">
			<Link to="/">
                    <span className="icon"><ion-icon name="locate-outline"></ion-icon></span>
                    <span className="text">Locations</span>
                </Link>
            </li>
            <li className="list">
			<Link to="/">
                    <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                    <span className="text">Contact us</span>
                </Link>
            </li>
            <li className="list">
				<Link to="/">
                    <span className="icon"><ion-icon name="information-circle-outline"></ion-icon></span>
                    <span className="text">About us</span>
                </Link>
            </li>
            <div className="indicator"></div>
        </ul>
		</div>
		
		  
		
		
	);
};

 



//servicios 
//location
//about us
//contact us
//Imagen perfil