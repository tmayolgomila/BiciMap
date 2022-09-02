import React from "react";
import "../../styles/aboutUs.css";

export default function AboutUs (){
    return(
        <div className="container1">
            <h1>Sobre Bicimap</h1>
            <hr></hr>
            <div className="fondoAboutUs">
            <p id="texto"> Somos Bicimap, una empresa dedicada a la compra, la venta y el alquiler de bicicletas. 
               <br></br>  Una plataforma dónde puedes vender tu bicicleta, alquilarla a nuestros usuarios y comprar bicicletas de otros usuarios, las cuales están expuestas en nuestro catálogo.
               <br></br>
                 Éstas estarán a disposición de nuestro usuario en nuestras estaciones, tanto las puestas en alquiler como las que están a la venta y se podrán utilizar por 30 cents el viaje.</p>
            </div>
            
        </div>
    )
}