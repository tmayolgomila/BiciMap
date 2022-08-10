import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMaps from "simple-react-google-maps"
import { Link } from "react-router-dom";
import "../../styles/maps.css";




export const Maps = () => {

    return (
        <div className="container">
            
            <Link to="signup"><button id="botonSignUp">SignUp</button></Link>
            <div className="or">OR</div>
            <Link to="login"><button id="botonLogin">Login</button></Link>
            
            
            <GoogleMaps

                apiKey={"AIzaSyCsIahTZGVsJhVL2YWTddAmieOAlvv4Ibk"}
                style={{height: "700px", width: "100%"}}
                zoom={10}
                center={{lat: 37.3890924, lng: -5.9844589}}


                markers={{lat: 37.3890924, lng: -5.9844589}}
            />
                   
        </div>
    );

};


