import React from "react";
//import GoogleMaps from "simple-react-google-maps"

export const Maps = () => {

    return (
        <div className="container">
            <GoogleMaps
                apiKey={"AIzaSyDLMSEUsNXiJ9AYqkgSt8ADPEnW8jBNGm8"}
                style={{height: "700px", width: "100%"}}
                zoom={10}
                center={{lat: 37.4224764, lng: -122.0842499}}
                markers={{lat: 37.4224764, lng: -122.0842499}}
            />
                   
        </div>
    );
};