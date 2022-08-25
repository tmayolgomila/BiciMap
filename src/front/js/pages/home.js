import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Maps } from "../component/maps";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "../component/App";

export const Home = () => {
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);}



