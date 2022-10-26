import { Component } from "react";
import "../../styles/footer.css";
import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

export const Footer = () => {
  

  return (
    <footer className="footer mt-auto py-3 text-center">
      <hr />
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <i className="fa-brands fa-square-twitter"></i>
              </svg>
            </a>
            
          </div>

          <div className="cardUs">
            <div className="imgUs">
            <img className="imgUs2" src="https://media-exp1.licdn.com/dms/image/D4D35AQFDV_b0zAtg1A/profile-framedphoto-shrink_800_800/0/1660923079167?e=1667404800&v=beta&t=bzWoxG5w32cLlzxRzW-dB0Rt1ixzPGs_zjRBLTvggiQ"></img>
            </div>
            <h1 className="h1Us">Tomeu Mayol</h1>
            <p className="pUs">
              <a href="https://www.linkedin.com/in/tomeu-mayol-gomila-272565238/" target="_blank">
                <ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
              </a>

              <a href="https://github.com/tmayolgomila" target="_blank">
                <ion-icon name="logo-github" id="git"></ion-icon>
              </a>
            </p>
          </div>

          <div className="cardUs">
            <div className="imgUs">
              <img className="imgUs2" src="https://media-exp1.licdn.com/dms/image/C4D03AQH9fR7d-9iDTQ/profile-displayphoto-shrink_800_800/0/1663233815444?e=1669852800&v=beta&t=Y1KHSLAZFPkLYq1k8GcEig2P2LHs3xHihljYKg1i10k"></img>
            </div>
            <h1 className="h1Us">Ignacio García-Conde</h1>
            <p className="pUs">
              <a href="https://www.linkedin.com/in/nacho-garc%C3%ADa-conde-fern%C3%A1ndez-591013173/" target="_blank">
                <ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
              </a>

              <a href="https://github.com/naxinga" target="_blank">
                <ion-icon name="logo-github" id="git"></ion-icon>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </footer>
  );
};
