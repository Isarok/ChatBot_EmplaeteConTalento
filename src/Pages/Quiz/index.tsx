import React, { useState, useEffect } from 'react';
import {Question} from '../../Components/Question';
import Result from '../../Components/Result';
import quizData from '../../Data/quiz.json';

const Quiz: React.FC = () => {
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [preguntas, setPreguntas] = useState<any[]>([]);

  useEffect(() => {
    setPreguntas(quizData.preguntas);
  }, []);

  const calcularPuntuacion = (): number => {
    let puntuacionTotal = 0;
    respuestas.forEach((respuesta, index) => {
      const pregunta = preguntas[index];
      puntuacionTotal += pregunta.opciones.indexOf(respuesta) + 1; // Sumar 1 para que el rango sea del 1 al 5
    });
    return puntuacionTotal;
  };

  const obtenerResultado = (puntuacion: number): string => {
    if (puntuacion >= 60 && puntuacion <= 75) {
      return "¡Enhorabuena! Tienes sólidas competencias para emprender...";
    } else if (puntuacion >= 46 && puntuacion <= 59) {
      return "Tienes un buen potencial emprendedor...";
    } else {
      return "Esto sugiere que puedes necesitar trabajar en desarrollar algunas competencias clave...";
    }
  };

  const onRespuestaSeleccionada = (respuesta: string) => {
    setRespuestas([...respuestas, respuesta]);
    if (respuestas.length === preguntas.length - 1) {
      setMostrarResultado(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {mostrarResultado ? (
        <Result puntuacion={calcularPuntuacion()} mensaje={obtenerResultado(calcularPuntuacion())} score={0} totalQuestions={0} pregunta={''} onReset={function (): void {
                  throw new Error('Function not implemented.');
              } } />
      ) : (
        <Question
          pregunta={preguntas[respuestas.length]?.pregunta}
          opciones={preguntas[respuestas.length]?.opciones}
          onRespuestaSeleccionada={onRespuestaSeleccionada}
        />
      )}
    </div>
  );
};

export default Quiz;
