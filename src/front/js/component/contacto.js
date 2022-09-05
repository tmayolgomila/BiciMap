import React from "react";
import "../../styles/formularioContacto.css";

export default function Contacto() {
  return (
    <div>
      <h1>Contacta con nosotros</h1>
      <div className="formularioContacto">
        <form action="https://formsubmit.co/bicimapapp@gmail.com" method="POST">
          <div class="form-group">
			<label>Nombre</label>
           <p> <input
              type="text"
              id="formGroupExampleInput"
              placeholder="Nombre"
              name="name"
            /></p>
          </div>
          <div class="form-group">
			<label>Email</label>
            <p><input
              type="email"
              id="formGroupExampleInput2"
              placeholder="@Email"
              name="email"
            /></p>
          </div>
          <div class="form-group">
			<label>Mensaje</label>
            <p><input
			  size="65" 
              type="text"
              id="formGroupExampleInput2"
              placeholder="Mensaje"
              name="message"
            /></p>
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
