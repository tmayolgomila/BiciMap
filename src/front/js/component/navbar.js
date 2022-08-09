import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/responsive-nav.css";



export const Navbar = () => {
	return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id="burger">
        <a class="navbar-brand ps-2" id="burger" href="#"><button className="logo">
        <Link to="/">
                    <a>BiciMap</a>
                </Link>
            </button></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"  ></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto pe-5" id="burger">
            <li class="nav-item" id="burger"><Link to="/login">
                    <a><span><ion-icon size="large" name="bicycle-outline"></ion-icon> Services</span></a>
                </Link></li>
            <li class="nav-item"><Link to="/">
                    <a><span><ion-icon size="large" name="locate-outline"></ion-icon> Locations</span></a>
                </Link></li>
            <li class="nav-item"><Link to="/footer">
                   <a><span><ion-icon size="large" name="call-outline"></ion-icon> Contact</span></a> 
                </Link></li>
            <li class="nav-item"><Link to="/">
                    <a><span><ion-icon size="large" name="information-circle-outline"></ion-icon> About us</span></a>
                </Link></li> 
       </ul>
    </div>
    </nav>
		
		
		  
		
		
	);
};

 



