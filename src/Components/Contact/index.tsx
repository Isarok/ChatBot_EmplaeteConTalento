import  { useRef, useState } from 'react';
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
        {error && <div className="error">{error}</div>} {/* Mostrar el mensaje de error si está presente */}
      </form>
    );
  };
  
  export default Contact;



//sendForm('service_rhmcrld', 'template_s8k0j7q', formData, 'TVETq8hbmSmqu94a6')