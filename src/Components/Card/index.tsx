import React, { useEffect } from 'react';
import './style.css';

const Card: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => {
  useEffect(() => {
    const handleCardClick = () => {
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        card.addEventListener('click', function() {
          this.classList.toggle('flipped');
        });
      });
    };

    handleCardClick(); // Llama a la función para agregar el event listener al cargar el componente

    // Elimina los event listeners cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, [title, description, image]); // Dependencia actualizada para que useEffect se ejecute cuando cambien title, description o image

  return (

    <section >
      <div className="w-full max-w-xl p-4 md:w-3/4 lg:w-1/2">
    <div className="w-40 h-62 cursor-pointer card">
        <figure className="face front  ">
        <img src={image} alt={title} />
        <h2 className='text-2xl font-bold '>{title}</h2>
      </figure>
      <div className="face back w-full h-full p-4 rounded-lg overflow-hidden bg-blue-900 transform perspective-600 rotate-y-180 "
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='backdrop-blur-sm  from-black to-transparent  bg-black bg-opacity-70  w-full h-full '>
             <div className="flex flex-col justify-center items-center">
              
              <h2 className='text-2xl font-bold p-4'>{title}</h2>
              <p className="text-[10px] justify-center items-center">{description}</p>
        
             </div>
          </div>
      </div>
    </div>
    </div>
    </section>
   
    
    
  );
};

export default Card;


