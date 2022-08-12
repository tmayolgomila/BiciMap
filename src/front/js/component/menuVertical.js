import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/menuVertical.css";



export const MenuVertical = () => {
	return (

<>
<div className="vertical-menu">
  <p href="#" class="active">Home</p>
  <p href="#">Link 1</p>
  <p href="#">Link 2</p>
  <p href="#">Link 3</p>
  <p href="#">Link 4</p>
</div>

</>
		
    );
};
