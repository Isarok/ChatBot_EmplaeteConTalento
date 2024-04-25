import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Banner from "../../Components/Banner/Index";
import { getAllCards } from "../../services/gameCard.service.ts";
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
    <div className=" xl:flex xl:justify-center xl:align-middle-center
                     lg:flex lg:flex-col lg:justify-between
                     md:flex md:flex-wrap md:justify-center md:align-middle-center 
                     sm:flex sm:flex-wrap sm:align-middle-center sm:justify-center
                     xs:flex xs:justify-center xs:align-middle-center
                     bg-blue-950"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",

      }}>

      <div className="flex flex-wrap justify-center items-center w-full lg:w-5/6 md:w-3/4 ">

        

          <Banner />
       

        <div className="flex flex-col  sm:flex-row flex-wrap justify-center items-center w-full lg:w-3/4"
        >
          {competencias.map((competencia) => (
            <div key={competencia.title}
              className="w-full  lg:w-1/4 md:w-1/3 sm:w-1/1" >
              <Card
                title={competencia.title}
                description={competencia.description}
                image={competencia.image}
                onClick={() => handleCardClick(competencia)}
              />
            </div>
          ))}
        </div>
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
