import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../assets/LOGO.png";

import { getCurrentUser, logout } from "../../services/auth.service";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = getCurrentUser();
  const handleLogout = () => {
    logout();
  };


  return (
    <>
      <div className="w-full h-24 fixed top-0 z-50 backdrop-blur-xl  flex justify-between items-center  px-20">
        <button>
          <img
            src={Logo}
            alt="logo"
            onClick={() => window.location.href = 'https://www.empleatecontalento.es/'}
            className="cursor-pointer w-40 h-auto border-1 border-gray-500"
          />
        </button>
        <div className="flex items-center">
          <ul className="hidden md:inline-flex items-center gap-10">
            <li className="text-white tracking-wide hover:text-stone-300 text-sm font-bold transition cursor-pointer">
              <Link to="/home">INICIO</Link>
            </li>
            <li className="text-white tracking-wide text-sm font-bold transition cursor-pointer">
              {currentUser ? (
                <button onClick={handleLogout} className="hover:text-stone-300">LOGOUT</button>
              ) : (
                <Link to="/login" className="hover:text-stone-300">
                  LOGIN
                </Link>
              )}
            </li>
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl mdl:hidden w-10 h-10 inline-flex items-center justify-center text-white rounded-full cursor-pointer"
          >
            <CiMenuBurger />
          </span>
        </div>
        {showMenu && (
          <div className="w-[80%] h-screen mdl:hidden overflow-hidden absolute top-0 left-0 bg-red-800/95 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-36 rounded-md" src={Logo} alt="logo" />
                <p className="text-sm text-white mt-2">
                  ¿Preparad@ para descubrir tus super talentos? Explora tus
                  capacidades ocultos con nuestros juegos interactivos.
                </p>
              </div>
              <ul className="flex flex-col">
                <li className="text-white tracking-wide hover:text-stone-300 text-sm font-bold transition cursor-pointer">
                  <Link to="/home">INICIO</Link>
                </li>
                <li className="text-white tracking-wide text-sm font-bold transition cursor-pointer">
                  {currentUser ? (
                    <button onClick={handleLogout} className="hover:text-stone-300">LOGOUT</button>
                  ) : (
                    <Link to="/login" className="hover:text-stone-300">
                      LOGIN
                    </Link>
                  )}
                </li>
              </ul>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-white duration-300 text-2xl cursor-pointer"
              >
                <FaTimes />
              </span>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Navbar;
