import React from "react";

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
                zoom={13}
                center={{lat: 37.3890924, lng: -5.9844589}}


                markers={[
                    {lat: 37.376867, lng: -5.987328},
                    {lat: 37.391200, lng: -5.975360},
                    {lat: 37.383284, lng: -5.970637},
                    {lat: 37.399116, lng: -5.993841}
                ]}
            />
                   
        </div>
    );

};


