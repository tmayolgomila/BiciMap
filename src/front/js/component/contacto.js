import React, {useState} from "react";
import "../../styles/formularioContacto.css";
import Modal from "react-modal";
import emailjs from '@emailjs/browser';



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
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x2bejsy', 'template_w9h0dqa', e.target, 'pI3vVgvJ2ThE0ulBX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
      
  return (
    <div>
      <h1>Contacta con nosotros</h1>
      <hr></hr>
      <form  onSubmit={sendEmail}>
      <div className="formularioContacto">
       
          <div className="form-group">
			<label>Nombre</label>
           <p> <input
              type="text"
              id="formGroupExampleInput"
              placeholder="Nombre"
              name="user_name"
            /></p>
          </div>
          <div className="form-group">
			<label>Email</label>
            <p><input
              type="email"
              id="formGroupExampleInput2"
              placeholder="@Email"
              name="user_email"
            /></p>
          </div>
          <div className="form-group">
			<label>Mensaje</label>
            <p><input
			        className="textoContacto"
              type="text"
              id="formGroupExampleInput2"
              name="message"
            /></p>
          </div>
          <input type="submit" value="Enviar" className="botonContacto" onClick={toggleModal}></input>

         
           <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
          
            <p className="ter">¡Mensaje enviado con éxito!</p>
          
        </div>
        <button id="botonModal" onClick={cerrar}>
          Close modal
        </button>
      </Modal>
          
          
      </div>
      </form>
    </div>
    
  );
}
