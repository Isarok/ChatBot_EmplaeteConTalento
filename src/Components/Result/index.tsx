import React from 'react';
import resultTexts from '../../Data/resultTexts.json';

interface ResultsProps {
  puntuacion: number;
  score: number;
  totalQuestions: number;
  pregunta: string;
  mensaje: string;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onReset }) => {

  const obtenerResultado = (puntuacion: number): React.ReactNode => {
    if (puntuacion >= 60 && puntuacion <= 75) {
      const { title, content } = resultTexts.excellent;
      return renderContent(title, content);
    } else if (puntuacion >= 46 && puntuacion <= 59) {
      const { title, content } = resultTexts.good;
      return renderContent(title, content);
    } else if (puntuacion >= 26 && puntuacion <= 45) {
      const { title, content } = resultTexts.needsImprovement;
      return renderContent(title, content);
    } else {
      return <p>Puntuación fuera de rango</p>;
    }
  };

  const renderContent = (title: string, content: any[]): React.ReactNode => {
    return (
      <>
        <p>{title} {content[0]}</p>
        <p>{content[1]}</p>
        <ul>
          {content[2].map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{content[3]}</p>
      </>
    );
  };

  return (
    <div className='flex flex-col justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5'>
      <h1 className='text-4xl font-bold'>Resultados</h1>

      <div className='flex flex-col gap-5 text-center text-lg font-bold'>
        <span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
          {((score / totalQuestions) * 100).toFixed(0)}%
        </span>
        de las preguntas ({score} de {totalQuestions})
      </div>

      <div className='text-center text-lg'>
        {obtenerResultado(score)}
      </div>

      <button
        className='border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
        onClick={() => onReset && onReset()}
      >
        Vamos de nuevo
      </button>
    </div>
  );
};

export default Results;
