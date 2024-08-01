import Empleabilidad from "../../assets/empleabilidad.png";
import Emprendimiento from "../../assets/emprendimiento.png";
import Formacion from "../../assets/formacion.png";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <section className="lg:w-1/3 backdrop-blur-2xl pt-5 flex flex-col rounded-lg border border-gray-300">
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-bold">¿PREPARAD@?</h1>
        <div className="flex lgl:flex-row lg:flex-row md:flex-row flex-col items-center sm:items-center sm:justify-start p-5">
          <Link to="https://empleate-quiz-cv.vercel.app/" className="link-wrapper">
            <div className="image-link bg-orange-600 hover:bg-orange-500 hover:border-white flex items-center justify-center w-28 h-28 text-white font-bold rounded-full border-2 border-orange-700">
              <img src={Empleabilidad} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1 className="text-left max-w-xs font-semibold">JUEGO DE CV</h1>
            <p className="text-sm max-w-xs">
              Descubre si tu currículum está bien elaborado
            </p>
          </div>
        </div>
        <div className="flex lgl:flex-row lg:flex-row md:flex-row flex-col items-center sm:items-center sm:justify-start p-5">
          <Link to="/GameCard" className="link-wrapper">
            <div className="image-link bg-sky-600 hover:bg-sky-500  hover:border-white flex items-center justify-center w-28 h-28 text-white font-bold rounded-full border-2 border-sky-700">
              <img src={Formacion} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1 className="text-left max-w-xs font-semibold">
              JUEGO DE COMPETENCIAS
            </h1>
            <p className="text-sm max-w-xs">
              Descubre los talentos que desarrollas con tus hobbies
            </p>
          </div>
        </div>
        <div className="flex lgl:flex-row lg:flex-row md:flex-row flex-col items-center sm:items-center sm:justify-start p-5">
          <Link to="/QuizPage" className="link-wrapper">
            <div className="image-link bg-green-600 hover:bg-green-500  hover:border-white flex items-center justify-center w-28 h-28 text-white font-bold rounded-full border-2 border-green-700">
              <img src={Emprendimiento} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1 className="text-left max-w-xs font-semibold">
              JUEGO DE EMPRENDIMIENTO
            </h1>
            <p className="text-sm max-w-xs">
              Descubre si tienes cualidades para emprender
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;