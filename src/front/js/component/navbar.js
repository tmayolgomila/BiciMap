import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export const Navbar = () => {
	return (
		<div className="navigation">
        
            <button className="navButton">
				<Link to="/">
                    <a><span><ion-icon size="large" name="home-outline"></ion-icon> Home</span></a>
                </Link>
            </button>
            <button className="navButton">
			<Link to="/demo">
                    <a><span><ion-icon size="large" name="bicycle-outline"></ion-icon> Services</span></a>
                </Link>
            </button>
            <button className="navButton">
			<Link to="/">
                    <a><span><ion-icon size="large" name="locate-outline"></ion-icon> Locations</span></a>
                </Link>
            </button>
            <button className="navButton">
			<Link to="/footer">
                   <a><span><ion-icon size="large" name="call-outline"></ion-icon> Contact</span></a> 
                </Link>
            </button>
            <button className="navButton">
				<Link to="/">
                    <a><span><ion-icon size="large" name="information-circle-outline"></ion-icon> About us</span></a>
                </Link>
            </button>
        
		</div>
		
		  
		
		
	);
};

 



