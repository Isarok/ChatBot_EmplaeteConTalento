import React, { useState, useEffect } from 'react';

// Definimos la interfaz para las propiedades del componente Results
interface ResultsProps {
  score: number; // Puntuación que se muestra y se utiliza para el mensaje

  onReset: () => void; // Función para reiniciar
}

export const Results: React.FC<ResultsProps> = ({ score, onReset }) => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (score >= 60 && score <= 75) {
      setMessage('¡Enhorabuena! Tienes sólidas competencias para emprender.');
    } else if (score >= 46 && score <= 59) {
      setMessage('Tienes un buen potencial emprendedor y con dedicación y esfuerzo, puedes alcanzar tus metas emprendedoras, pero hay áreas en las que puedes mejorar.');
    } else if (score >= 26 && score <= 45) {
      setMessage('Esto sugiere que puedes necesitar trabajar en desarrollar algunas competencias clave para el emprendimiento. Es importante identificar tus áreas de mejora y buscar oportunidades para aprender y crecer. Con determinación y compromiso, aún puedes desarrollar las habilidades necesarias para tener éxito como emprendedor. ¡No te desanimes y sigue adelante!');
    } else if (score >= 0 && score <= 25) {
      setMessage('Esto sugiere que puedes necesitar trabajar en desarrollar algunas competencias clave para el emprendimiento. Con determinación y compromiso, aún puedes desarrollar las habilidades necesarias para tener éxito como emprendedor.');
    } else {
      setMessage('Puntuación fuera del rango esperado.');
    }
  }, [score]); // Ejecuta el efecto cada vez que 'score' cambie
 console.log(score)
  return (
    <div className='flex flex-col text-white justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5 bg-gray-800 bg-opacity-80'>
      <h1 className='text-4xl font-bold'>Resultados</h1>

      <div className='flex flex-col gap-5 text-center text-lg font-bold'>
        <span>Tu puntuación es:</span>
        <span className='font-black bg-gradient-to-r from-purple-500  to-pink-500 bg-clip-text text-transparente text-6xl animate-pulse'>
          {score}
        </span>
        <span>{message}</span>
      </div>

      <button
        className='border bg-gray-100 text-gray-800 px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
        onClick={onReset}
      >
        Vamos de nuevo
      </button>
    </div>
  );
};
