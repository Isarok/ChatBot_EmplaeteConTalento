import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";


const ContactModal: React.FC = () => {
  const [formData, setFormData] = useState({
    to_email: ""
  });
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar el modal

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceID = "service_rhmcrld";
    const templateID = "template_s8k0j7q";
    const publicKey = "TVETq8hbmSmqu94a6";

    const templateParams = {
      to_email: formData.to_email
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          alert("Enviar!");
          setModalIsOpen(false); // Cerrar el modal después de enviar
          
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded cursor-pointer transition duration-300  flex-1 self-end" onClick={() => setModalIsOpen(true)}>
        Email
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <form 
          className="justify-center mx-auto p-4 border-4 bg-opacity-50 w-96 border-black text-white bg-red-800 rounded-lg my-8"
          id="form"
          onSubmit={handleSubmit}
        >

          <div className="grid grid-cols-1 gap-4 ">
          
          <label 
              htmlFor="to_email"
              className="justify-between text-xl w-full font-semi-bold text-center" 
            >
              
              Puedes escribirnos tu email si quieres recibir los enlaces.
            </label>
            <input
              type="email"
              name="to_email"
              id="to_email"
              onChange={handleInputChange}
              required
              className=" text-black border bg-transparent-50  bg-opacity-80 text-xl rounded px-4"
            />
          
          <div className="grid grid-cols-2 gap-36 ">
          <input 
            type="submit"
            id="button" 
            value="Enviar"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xl cursor-pointer transition duration-300 self-end"
          />

          <input 
            type="submit"
            id="button" 
            value="Volver"
            onClick={() => setModalIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded  text-xl cursor-pointer transition duration-300 self-end"
          />
          </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ContactModal;
