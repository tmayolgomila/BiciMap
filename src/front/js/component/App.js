import { useLoadScript } from "@react-google-maps/api";
import Map from "./maps";


export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
