import  { useEffect, useState } from 'react';
import quizData from '../../Data/quiz.json';
import  Result  from '../../Components/Result';

export const Question = () => {
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answersRandom, setAnswersRandom] = useState<string[]>([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizData.preguntas[indexQuestion];

  useEffect(() => {
    const answers = currentQuestion.opciones;
    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [currentQuestion]);

  const checkAnswer = (answerText: string, index: number) => {
    if (answerText === currentQuestion.opciones[currentQuestion.opciones.length - 1]) {
      setScore(score + currentQuestion.opciones.length - index);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    if (indexQuestion + 1 < quizData.preguntas.length) {
      setIndexQuestion(indexQuestion + 1);
      setSelectAnswerIndex(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const onReset = () => {
    setScore(0);
    setIndexQuestion(0);
    setSelectAnswerIndex(null);
    setAnswered(false);
    setShowResult(false);
  };

  return (
    <>
      {showResult ? (
        <Result score={score} totalQuestions={0} onReset={function (): void {
                  throw new Error('Function not implemented.');
              } } puntuacion={0} pregunta={''} mensaje={''} />
      ) : (
        <div className='flex flex-col justify-between shadow-md  shadow-slate-300 w-[600px] h-[600px] p-2 rounded-lg'>
          <div className='flex justify-between'>
            <span className='text-lg font-semibold'>
              {indexQuestion + 1} / {quizData.preguntas.length}
            </span>
          </div>

          <button
            className='border px-3 py-1 rounded-md font-semibold transition-all hover:bg-red-300 hover:text-gray-900'
            onClick={onReset}
          >
            Reiniciar
          </button>
          <div>
            <h1 className='font-bold'>{currentQuestion.pregunta}</h1>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {answersRandom.map((answer, index) => (
              <button
                className={`border p-2 rounded-lg flex justify-center items-center hover:scale-105 ${
                  selectAnswerIndex !== null &&
                  index === selectAnswerIndex
                    ? answer === currentQuestion.opciones[currentQuestion.opciones.length - 1]
                      ? 'bg-red-300'
                      : 'bg-red-300'
                    : ''
                }`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index}
              >
                <p className='font-medium text-center text-sm'>
                  {answer}
                </p>
              </button>
            ))}
          </div>

          <button
            className='border-2 border-red-600 text-red-600 rounded-md px-5 py-2 hover:bg-red-400 hover:text-black font-medium'
            onClick={onNextQuestion}
            disabled={!answered}
          >
            {indexQuestion + 1 < quizData.preguntas.length ? 'Siguiente Pregunta' : 'Ver Resultado'}
          </button>
        </div>
      )}
    </>
  );
};
