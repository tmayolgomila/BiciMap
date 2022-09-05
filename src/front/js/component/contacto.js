import React, {useState} from "react";
import "../../styles/formularioContacto.css";
import Modal from "react-modal";


export default function Contacto() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function cerrar (){
    setIsOpen(!isOpen);
}
  const customStyles = {
    overlay: {
      position: "fixed",
      backgroundColor: "rgba(15, 26, 32, 0.75)",
    },
    content: {
      top: "25%",
      left: "50%",
      width: "350px",
      height: "150px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0F1A20",
      color: "white",
      borderColor: "#2FBF71",
    },
  };
  
  return (
    <div>
      <h1>Contacta con nosotros</h1>
      <hr></hr>
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
            value="https://3000-tmayolgomila-bicimap-auiu7gj70uc.ws-eu63.gitpod.io"
            onClick={toggleModal}
          ></input>
           <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
          
            <p className="ter">¡Mensaje realizado con éxito!</p>
          
        </div>
        <button id="botonModal" onClick={cerrar}>
          Close modal
        </button>
      </Modal>
          
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </div>
  );
}
