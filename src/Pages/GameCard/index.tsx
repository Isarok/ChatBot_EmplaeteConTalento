import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Banner from "../../Components/Banner/Index";
import { getAllCards } from "../../Services/gameCard.service.ts";
import { Competencia } from "../../../Interfaces/cardInterfaces.ts";
import backgroundImage from "../../assets/BackgroundImg.jpeg";

const Game: React.FC = () => {
  const [competencias, setCompetencias] = useState<Competencia[]>([]);
  const [selectedCompetencia, setSelectedCompetencia] =
    useState<Competencia | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCards();
        const data = response.results;
        setCompetencias(data);
      } catch (error) {
        console.log("Error al traer cards:", error);
        throw error;
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (competencia: Competencia) => {
    setSelectedCompetencia(competencia);
  };

  return (
    <div className=" lg:flex lg:flex-col lg:justify-between bg-blue-950 sm:flex sm:flex-wrap sm:align-middle-center sm:justify-center" /* xs:flex xs:justify-center xs:items-center */
      style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundBlendMode: "overlay",
      
      }}>
      {/* Cards a la izquierda */}
      <div className=" ">
        <Banner />
      </div>
      <div className="w-[65%] md:-\[65\%\] lg:-\[65\%\] lg:flex lg:flex-wrap  md:flex-wrap md:flex sm:flex sm:flex-wrap ">
        {competencias.map((competencia) => (
          <div key={competencia.title} className="w-full md:w-1/4">
            <Card
              title={competencia.title}
              description={competencia.description}
              image={competencia.image}
              onClick={() => handleCardClick(competencia)}
            />
          </div>
        ))}
      </div>
      

      {selectedCompetencia && (
        <div className="">
          <h2>Competencia Seleccionada:</h2>
          <p>{selectedCompetencia.title}</p>
          <p>{selectedCompetencia.description}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
