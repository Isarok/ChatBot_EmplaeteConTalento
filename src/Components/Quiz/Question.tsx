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
  questionsFiltered: QuestionData[];
  indexQuestion: number;
  setIndexQuestion: (index: number) => void;
  setActiveQuiz: (active: boolean) => void;
}

export const Question: React.FC<QuestionProps> = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}) => {
  const [totalScore, setTotalScore] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
/*   const [answered, setAnswered] = useState<boolean>(false); */
  const [answersRandom, setAnswersRandom] = useState<string[]>([]);
  const [activeResults, setActiveResults] = useState<boolean>(false);

  useEffect(() => {
    const answers = [
      filteredQuestion.five_answer,
      filteredQuestion.four_answer,
      filteredQuestion.three_answer,
      filteredQuestion.two_answer,
      filteredQuestion.one_answer,
    ];

    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  const calculateCurrentScore = (answerText: string): number => {
    if (answerText === filteredQuestion.five_answer) return 5;
    if (answerText === filteredQuestion.four_answer) return 4;
    if (answerText === filteredQuestion.three_answer) return 3;
    if (answerText === filteredQuestion.two_answer) return 2;
    if (answerText === filteredQuestion.one_answer) return 1;
    return 0;
  };

  const selectAnswer = (answerText: string, index: number) => {
    setCurrentScore(calculateCurrentScore(answerText));
    setSelectedAnswerIndex(index);
/*     setAnswered(true); */
  };

  const onNextQuestion = () => {
    setTotalScore(totalScore + currentScore); // Se suma la puntuación solo al hacer clic en "Siguiente"
    setCurrentScore(0);
    setIndexQuestion(indexQuestion + 1);
    setSelectedAnswerIndex(null);
    /* setAnswered(false); */
  };

  const onReset = () => {
    setTotalScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
    setActiveResults(false);
  };
 
  console.log(totalScore)
  return (
    <>
      {activeResults ? (
        <Results score={totalScore} onReset={onReset} />
      ) : (
        <div className="flex flex-col items-center justify-between max-w-2xl p-6 bg-white text-gray-800 rounded-lg shadow-lg">
          <div className="flex justify-between w-full">
            <span className="text-m font-bold">
              {indexQuestion + 1} / {questionsFiltered.length}
            </span>
            <button
              className="border px-3 py-2 rounded-lg font-bold transition-all hover:bg-red-500 hover:text-white"
              onClick={onReset}
            >
              Reiniciar
            </button>
          </div>

          <h2 className="text-center text-xl font-bold my-2">
            {filteredQuestion.question}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {answersRandom.map((answer, index) => (
              <button
                key={answer}
                className={`border p-3 rounded-lg flex justify-center items-center hover:scale-105 transition-transform ${
                  selectedAnswerIndex === index
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => selectAnswer(answer, index)}
              >
                {answer}
              </button>
            ))}
          </div>

          <div className="w-full text-center mt-5">
            {indexQuestion + 1 === questionsFiltered.length ? (
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
                onClick={() => {
                  setActiveResults(true);
                }}
              >
                Finalizar
              </button>
            ) : (
              <button
                className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                onClick={onNextQuestion}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
