import { useLoadScript } from "@react-google-maps/api";
import Map from "./maps";
import React from "react";
import "../../styles/maps.css";
export default function App() {
  const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyCsIahTZGVsJhVL2YWTddAmieOAlvv4Ibk" // Add your API key
  });

  return(isLoaded ? <Map /> : null) ;
}
