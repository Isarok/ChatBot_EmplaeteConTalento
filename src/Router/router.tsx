import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import GameCard from "../Pages/GameCard";
import GameMillonaire from "../Pages/GameMillonaire";
<<<<<<< HEAD
import '../index.css';
=======
import LoginRegister from "../Pages/LoginRegister";
>>>>>>> 2411adca69546996b4b626142da49edb490486c9

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/GameCard",
    element: <GameCard />,
  },
  {
    path: "/GameMillonaire",
    element: <GameMillonaire />,
  },
  {
    path: "/login",
    element: <LoginRegister />,
  },
]);
