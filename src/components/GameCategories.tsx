import Empleabilidad from "../assets/empleabilidad.png";
import Emprendimiento from "../assets/emprendimiento.png";
import Formacion from "../assets/formacion.png";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <section className="font-sans lgl:w-1/3 lg:w-1/2 backdrop-blur-2xl pt-5 flex flex-col rounded-lg border border-gray-300">
      <div className="flex flex-col gap-3">
        <h1 className="text-center">¿PREPARAD@?</h1>
        <div className="flex lgl:flex-row lg:flex-row md:flex-row flex-col items-center sm:items-center sm:justify-start p-5">
          <Link to="/orange-page" className="link-wrapper">
            <div className="image-link bg-red-700 hover:bg-red-600 flex items-center justify-center w-28 h-28 text-white font-bold rounded-full border-2 border-red-800">
              <img src={Empleabilidad} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1 className="text-left max-w-xs">JUEGO DE CV</h1>
            <p className="text-sm max-w-xs">Descubre si tu currículum está bien elaborado</p>
          </div>
        </div>
        <div className="flex lgl:flex-row lg:flex-row md:flex-row flex-col items-center sm:items-center sm:justify-start p-5">
          <Link to="/blue-page" className="link-wrapper">
            <div className="image-link bg-red-700 hover:bg-red-600 flex items-center justify-center w-28 h-28 text-white font-bold rounded-full border-2 border-red-800">
              <img src={Formacion} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1 className="text-left max-w-xs">JUEGO DE COMPETENCIAS</h1>
            <p className="text-sm max-w-xs">Descubre los talentos que desarrollas con tus hobbies</p>
          </div>
        </div>
        <div className="flex lgl:flex-row lg:flex-row md:flex-row flex-col items-center sm:items-center sm:justify-start p-5">
          <Link to="/green-page" className="link-wrapper">
            <div className="image-link bg-red-700 hover:bg-red-600 flex items-center justify-center w-28 h-28 text-white font-bold rounded-full border-2 border-red-800">
              <img src={Emprendimiento} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1 className="text-left max-w-xs">JUEGO DE EMPRENDIMIENTO</h1>
            <p className="text-sm max-w-xs">Descubre si tienes cualidades para emprender</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;