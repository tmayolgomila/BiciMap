import React from "react";
import "../../styles/carrousel.css";
import bicimap1 from ".//bicimap1-2.jpg";
 import bicimap2 from ".//bicimap2.jpg";
 import bicimap3 from ".//bicimap3.jpg";
 import bicimap4 from ".//bicimap4.jpg";  

export default function Gallery() {
  return (
    <div className="cajaCarrousel" >
    <div id="slider">
      <figure>
        <img src={bicimap1} alt="" />
        <img src={bicimap2} alt="" />
        <img src={bicimap3} alt="" />
        <img src={bicimap4} alt="" />

      </figure>
    </div>
    </div>
  );
}
