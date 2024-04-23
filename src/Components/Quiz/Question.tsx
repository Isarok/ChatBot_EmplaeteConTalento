import React, { useEffect, useState } from 'react';
import { Results } from './Results';
import { QuestionData } from '../../Pages/QuizPage/CategoryPage';

// Define las propiedades esperadas para el componente
interface QuestionProps {
  filteredQuestion: {
    five_answer: string;
    four_answer: string;
    three_answer: string;
    two_answer: string;
    one_answer: string;
    question: string;
  };
  
  questionsFiltered: QuestionData[]; // Uso correcto del tipo
  indexQuestion: number;
  
  setIndexQuestion: (index: number) => void;
  setActiveQuiz: (active: boolean) => void;
}


export const Question: React.FC<QuestionProps> = ({ filteredQuestion, questionsFiltered, indexQuestion, setIndexQuestion, setActiveQuiz }) => {
  const [score, setScore] = useState<number>(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  const [answersRandom, setAnswersRandom] = useState<string[]>([]);
  const [activeResults, setActiveResults] = useState<boolean>(false);
  console.log(filteredQuestion)
  useEffect(() => {
    const answers = [
      filteredQuestion.five_answer,
      filteredQuestion.four_answer,
      filteredQuestion.three_answer,
      filteredQuestion.two_answer,
      filteredQuestion.one_answer,
      
    ];

    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]); // Se activa cuando cambia la pregunta filtrada
  
  const checkAnswer = (answerText: string, index: number) => {
    let pointValue = 0;
    if (answerText === filteredQuestion.five_answer) {
      pointValue = 5;
    } else if (answerText === filteredQuestion.four_answer) {
      pointValue = 4;
    } else if (answerText === filteredQuestion.three_answer) {
      pointValue = 3;
    } else if (answerText === filteredQuestion.two_answer) {
      pointValue = 2;
    } else if (answerText === filteredQuestion.one_answer) {
      pointValue = 1;
    }

    setScore((prevScore) => prevScore + pointValue);
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
  };
  console.log(score)
  return (
    <>
      {activeResults ? (
        <Results  score={score} onReset={onReset} />
      ) : (
        <div className="flex  flex-col text-white items-center  shadow-md shadow-slate-300 gap-5  p-10 rounded-lg bg-green-900 bg-opacity-70" >
          <div className="flex justify-between">
            <span className="text-xl font-bold">{indexQuestion + 1} / {questionsFiltered.length}</span>
          </div>

          <div>
            <h1 className="font-bold">{filteredQuestion.question}</h1>
          </div>

          <div className="grid grid-cols-2 gap-5 ">
            {answersRandom.map((answer, index) => (
              <button
                key={answer}
                className={`border text-white  border-green-600 text-600  p-5 rounded-lg flex justify-center items-center hover:scale-105 ${selectAnswerIndex !== null && index === selectAnswerIndex ? 'bg-green-500' : 'bg-gray-800'}`}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered}
              >
                <p className="font-medium text-center">{answer}</p>
              </button>
            ))}
          </div>

          {indexQuestion + 1 === questionsFiltered.length ? (
            <button
              className="border-2 border-green-600 text-600 rounded-md px-5 py-2 hover:bg-green-600 hover:text-black font-medium "
              onClick={() => {
                setAnswered(false);
                setActiveResults(true);
                
              }}
            >
              Finalizar
            </button>
          ) : (
            <button
              className="border-2 border-green-600 text-600 rounded-md px-5 py-2 hover:bg-green-600 hover:text-black font-medium"
              onClick={onNextQuestion}
            >
              Siguiente Pregunta
            </button>
          )}
        </div>
      )}
    </>
  );
};
