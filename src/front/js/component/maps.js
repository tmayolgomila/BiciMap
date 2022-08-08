import React from "react";
import GoogleMaps from "simple-react-google-maps"

export const Maps = () => {

    return (
        <div className="container">
            <GoogleMaps
                apiKey={"AIzaSyCsIahTZGVsJhVL2YWTddAmieOAlvv4Ibk"}
                style={{height: "700px", width: "100%"}}
                zoom={10}
                center={{lat: 37.3753501, lng: -6.0250983}}
                markers={{lat: 37.4224764, lng: -122.0842499}}
            />
                   
        </div>
    );
};