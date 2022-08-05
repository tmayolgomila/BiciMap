import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export const Navbar = () => {
	return (
		<div className="navigation">
        
            <button className="navButton">
				<Link to="/">
                    <a><span><ion-icon name="home-outline"></ion-icon> Home</span></a>
                </Link>
            </button>
            <button className="navButton">
			<Link to="/demo">
                    <a><span><ion-icon name="bicycle-outline"></ion-icon> Services</span></a>
                </Link>
            </button>
            <button className="navButton">
			<Link to="/">
                    <a><span><ion-icon name="locate-outline"></ion-icon> Locations</span></a>
                </Link>
            </button>
            <button className="navButton">
			<Link to="/">
                   <a><span><ion-icon name="call-outline"></ion-icon> Contact</span></a> 
                </Link>
            </button>
            <button className="navButton">
				<Link to="/">
                    <a><span><ion-icon name="information-circle-outline"></ion-icon> About us</span></a>
                </Link>
            </button>
        
		</div>
		
		  
		
		
	);
};

 



