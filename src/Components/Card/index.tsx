import React, { useEffect } from "react";
import "./style.css";
import { Competencia } from "../../../Interfaces/cardInterfaces";

const Card: React.FC<Competencia> = ({ title, description, image }) => {
  useEffect(() => {
    const handleCardClick = () => {
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        card.addEventListener("click", function () {
          card.classList.toggle("flipped");
        });
      });
    };

    handleCardClick(); // Llama a la función para agregar el event listener al cargar el componente

    // Elimina los event listeners cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        card.removeEventListener("click", handleCardClick);
      });
    };
  }, [title, description, image]); // Dependencia actualizada para que useEffect se ejecute cuando cambien title, description o image

  return (

    <section className="flex flex-col justify-center items-center sm:flex-col sm:justify-center " >
      
        <div className=" 2xl:w-48 2xl:h-60
                         xl:w-40 xl:h-60
                         lg:w-36 lg:h-56
                         md:w-36 md:h-56
                         sm:w-56 sm:h-74
                         sx:w-56 sx:h-74  
                         w-56 h-74 cursor-pointer card ">

        <figure className="face front ">
              <img src={image} alt={title} />
              <h2 className='text-2xl font-bold'>{title}</h2>
        </figure>

      <div className="face back w-full h-full p-2 overflow-hidden transform perspective-600 rotate-y-180 "
          style={{ backgroundImage: `url(${image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' }}
        >
          <div className="backdrop-blur-sm rounded-md text-center text-white  from-black to-transparent  bg-black bg-opacity-70  w-full h-full">
             <div className="flex flex-col justify-center items-center">
              
              <h2 className="text-1xl font-bold p-2">{title}</h2>
              <p className="2xl:text-base 2xl:m-2
                            xl:text-sm
                            lg:text-sm
                            md:text-sm 
                            sm:text-sm
              text-[12px] p-1 justify-center items-center">{description}</p>
        
             </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Card;
