/* import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: ''
    });
    const [error, setError] = useState<string>('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!formData.user_email) {
        setError('Por favor, ingresa tu dirección de correo electrónico.');
        return;
      }
  
      if (!form.current) return;
  
      emailjs
        .sendForm('service_rhmcrld', 'template_s8k0j7q', form.current, 'TVETq8hbmSmqu94a6')
        .then(
          (result) => {
            console.log('Correo electrónico enviado correctamente:', result.text);
            setError(''); // Limpiar el estado de error si el envío fue exitoso
          },
          (error) => {
            console.error('Error al enviar el correo electrónico:', error);
            setError('Error al enviar el correo electrónico. Por favor, inténtalo de nuevo.'); // Actualizar el estado de error con un mensaje genérico
          }
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className="field">
        <label>Name</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        <input type="submit" value="Send" />
        {error && <div className="error">{error}</div>} 
      </form>
    );
  };
  
  export default Contact;



//sendForm('service_rhmcrld', 'template_s8k0j7q', formData, 'TVETq8hbmSmqu94a6') */
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
    to_email: "",
    reply_to: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_0j5jzgj";
    const publicKey = "Uhrzp0wG07AwnFgvq";

    emailjs
      .sendForm(serviceID, templateID, event.currentTarget, publicKey)
      .then(
        () => {
          alert("Sent!");
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

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="from_name">From Name</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label htmlFor="to_name">To Name</label>
        <input
          type="text"
          name="to_name"
          id="to_name"
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" onChange={handleTextareaChange} />
      </div>
      <div className="field">
        <label htmlFor="to_email">To Email</label>
        <input
          type="text"
          name="to_email"
          id="to_email"
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label htmlFor="reply_to">Reply To</label>
        <input
          type="text"
          name="reply_to"
          id="reply_to"
          onChange={handleInputChange}
        />
      </div>

      <input type="submit" id="button" value="Send Email" />
    </form>
  );
};

export default Contact;
