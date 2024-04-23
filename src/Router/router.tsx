import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import GameCard from "../Pages/GameCard";
import GameMillonaire from "../Pages/GameMillonaire";
import "../index.css";
import LoginRegister from "../Pages/LoginRegister";
import App from "../Pages/App";

import { CategoryPage } from "../Pages/QuizPage/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/QuizPage",
        element: <CategoryPage />,
      },
      {
        path: "/login",
        element: <LoginRegister />,
      },
    ],
  },
]);
