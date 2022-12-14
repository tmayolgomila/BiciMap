import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import InfoEstacion from "./infoEstacion";
import "../../styles/maps.css";
import bici from "../../img/bici.png";


const markers = [
  {
    id: 1,
    name: <InfoEstacion id={1}></InfoEstacion>,
    position: {lat: 37.376867, lng: -5.987328},
    type: "parking"
  },
  {
    id: 2,
    name: <InfoEstacion id={2}></InfoEstacion>,
    position: {lat: 37.391200, lng: -5.975360}
  },
  {
    id: 3,
    name: <InfoEstacion id={3}></InfoEstacion>,
    position: {lat: 37.383284, lng: -5.970637}
  },
  {
    id: 4,
    name: <InfoEstacion id={4}></InfoEstacion>,
    position: {lat: 37.399116, lng: -5.993841}
    
  },
  {
    id: 5,
    name: <InfoEstacion id={5}></InfoEstacion>,
    position: {lat: 37.398611, lng: -6.007222}
    
  },
  {
    id: 6,
    name: <InfoEstacion id={6}></InfoEstacion>,
    position: {lat: 37.3614499, lng: -5.9815814}
    
  },
  {
    id: 7,
    name: <InfoEstacion id={7}></InfoEstacion>,
    position: {lat:37.334670, lng: -5.932810}
    
  }
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "50vh"}}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          options={{icon: "bici.png"}}
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;


