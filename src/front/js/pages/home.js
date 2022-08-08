import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Maps } from "../component/maps";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center mt-5">
      
          <Maps />
      
    </div>
  );
};
