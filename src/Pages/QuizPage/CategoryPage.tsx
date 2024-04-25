import React, { useEffect, useState } from 'react';
/* import { useParams } from 'react-router-dom'; */
import { Question } from '../../Components/Quiz/Question';
import { questions } from '../../Components/Quiz/data';
import BackgroundImg from '../../assets/BackgroundImg.jpeg';
import Emprendimiento from '../../assets/IconoEmprendimiento.png';


export interface QuestionData {
  id: number;
  question: string;
  category: string;
  five_answer: string;
  four_answer: string;
  three_answer: string;
  two_answer: string;
  one_answer: string;
}


const shuffleArray = (array: QuestionData[]): QuestionData[] => {
  return array.sort(() => Math.random() - 0.5);
};


export const CategoryPage: React.FC = () => {


  const [questionsFiltered, setQuestionsFiltered] = useState<QuestionData[]>(
    questions
  );
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [activeQuiz, setActiveQuiz] = useState<boolean>(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);

  }, []);


  return (
    <div
      className=' flex flex-col items-center justify-center bg-gray-900 min-h-screen'                      
      style={{
         backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        backgroundBlendMode: "overlay",
      }}
    >
      {activeQuiz ? (
        <Question

          filteredQuestion={questionsFiltered[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className='flex flex-col '>


          <div className='flex justify-center items-center'>
              <img
                src={Emprendimiento}
                alt={'Emprendimiento'}
                className='w-72 h-72'
              />
            </div>
          </div>

          <button
            className='text-white text-2xl bg-green-900 py-2 rounded-lg w-72 h-20 font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
            onClick={() => setActiveQuiz(true)}
          >
            Iniciar test
          </button>
        </>
      )}
    </div>
  );
};
