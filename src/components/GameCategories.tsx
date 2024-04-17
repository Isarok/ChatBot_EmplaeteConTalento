import Empleabilidad from "../assets/empleabilidad.png";
import Emprendimiento from "../assets/emprendimiento.png";
import Formacion from "../assets/formacion.png";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <section className="font-sans lgl:w-1/3 lg:w-1/2 backdrop-blur-2xl pt-5 flex flex-col gap-10 rounded-lg border border-gray-300">
      <div className="flex flex-col gap-4">
      <h1 className="text-center">¡JUGUEMOS!</h1>
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start p-5">
          <Link to="/orange-page" className="link-wrapper">
            <div className="image-link bg-orange-500 hover:bg-orange-700 flex items-center justify-center w-28 h-28 text-white font-bold rounded-full">
              <img src={Empleabilidad} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1>JUEGO DE CV</h1>
            <p className="text-sm">Descubre si tu currículum esta bien elaborado</p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start p-5">
          <Link to="/blue-page" className="link-wrapper">
            <div className="image-link bg-blue-500 hover:bg-blue-700 flex items-center justify-center w-28 h-28 text-white font-bold rounded-full">
              <img src={Formacion} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1>JUEGO DE COMPETENCIAS</h1>
            <p className="text-sm">Descubre las talentos que desarrollas con tus hobbies</p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-start p-5">
          <Link to="/green-page" className="link-wrapper">
            <div className="image-link bg-green-500 hover:bg-green-700 flex items-center justify-center w-28 h-28 text-white font-bold rounded-full">
              <img src={Emprendimiento} alt="" className="w-1/2 h-1/2" />
            </div>
          </Link>
          <div className="ml-4">
            <h1>JUEGO DE EMPRENDIMIENTO</h1>
            <p className="text-sm">Descubre si tienes cualidades para emprender</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
