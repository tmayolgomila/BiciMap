import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMaps from "simple-react-google-maps"

/*const containerStyle = {
    width: '100%',
    height: '700px'
  };
  
  const center = {
    lat: 37.3753501,
    lng: -6.0250983
  };
  
  function MyComponent() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCsIahTZGVsJhVL2YWTddAmieOAlvv4Ibk"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc.  }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
  
  export default React.memo(MyComponent)*/

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
