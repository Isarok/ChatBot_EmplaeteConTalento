// src\Pages\GameCard\index.tsx
import React, { useState } from 'react';
import  Card  from '../../Components/Card';
import { Competencia } from '../../Types/Interface';

const Game: React.FC = () => {
  const [selectedCompetencia, setSelectedCompetencia] = useState<Competencia | null>(null);

  const handleCardClick = (competencia: Competencia) => {
    setSelectedCompetencia(competencia);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Renderizar las cartas */}
      <Card content={{ id: 1, nombre: 'Competencia 1', descripcion: 'Descripción de la competencia 1' }} onClick={handleCardClick} />
      {/* Agregar más cartas según sea necesario */}
      
      {/* Mostrar la competencia seleccionada */}
      {selectedCompetencia && (
        <div className="selected-competencia">
          <h2>Competencia Seleccionada:</h2>
          <p>{selectedCompetencia.nombre}</p>
          <p>{selectedCompetencia.descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default Game;


