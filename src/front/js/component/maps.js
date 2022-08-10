import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMaps from "simple-react-google-maps"




export const Maps = () => {

    return (
        <div className="container">
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


