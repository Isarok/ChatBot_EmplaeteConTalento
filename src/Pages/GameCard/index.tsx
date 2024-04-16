import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import Banner from '../../Components/Banner/Index';

interface Competencia {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const Game: React.FC = () => {
  const [competencias, setCompetencias] = useState<Competencia[]>([]);
  const [selectedCompetencia, setSelectedCompetencia] = useState<Competencia | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/competencias');
      const data = await response.json();
      setCompetencias(data);
    };

    fetchData();
  }, []);

  const handleCardClick = (competencia: Competencia) => {
    setSelectedCompetencia(competencia);
  };

  return (
    <div className="flex flex-wrap justify-around">
      

      {/* Cards a la izquierda */}
      <div className="w-[65%] md:-\[65\%\] flex flex-wrap md:flex-wrap">
        {competencias.map((competencia) => (
          <div key={competencia.title} className="w-full md:w-1/4 p-2">
            <Card
              title={competencia.title}
              description={competencia.description}
              image={competencia.image}
              onClick={() => handleCardClick(competencia)}
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/4 p-2">
        <Banner />
      </div>

      {selectedCompetencia && (
        <div className="w-full p-4">
          <h2>Competencia Seleccionada:</h2>
          <p>{selectedCompetencia.title}</p>
          <p>{selectedCompetencia.description}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
