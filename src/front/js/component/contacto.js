import React from "react";
import "../../styles/formularioContacto.css";

export default function Contacto() {
  return (
    <div>
      <h1>Contacta con nosotros</h1>
      <div className="formularioContacto">
        <form action="https://formsubmit.co/bicimapapp@gmail.com" method="POST">
          <div class="form-group">
            <input
              type="text"
              id="formGroupExampleInput"
              placeholder="Nombre"
              name="name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              id="formGroupExampleInput2"
              placeholder="@Email"
              name="email"
            />
          </div>
          <div class="form-group">
            <input
			  size="65" 
              type="text"
              id="formGroupExampleInput2"
              placeholder="Mensaje"
              name="message"
            />
          </div>
          <input type="submit" value="Enviar" className="botonContacto" ></input>
          <input
            type="hidden"
            name="_next"
            value="https://3000-tmayolgomila-bicimap-hv3l6nn547y.ws-eu63.gitpod.io"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </div>
  );
}
