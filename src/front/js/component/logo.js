import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export const Logo = () => {
	return (
		<div className="LogoNav">
		
            <button className="logo">
				<Link to="/">
                    <a>BiciMap</a>
                </Link>
            </button>
            <label for="check" class="bar">
    <input id="check" type="checkbox"/>

    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
    </label>
            
			
        
		</div>
		
		  
		
		
	);
};

 