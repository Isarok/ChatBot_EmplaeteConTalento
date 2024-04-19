import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import GameCard from "../Pages/GameCard";
import GameMillonaire from "../Pages/GameMillonaire";
import ContactPage from "../Pages/ContactPage";
import '../index.css';
import LoginRegister from "../Pages/LoginRegister";

export const router = createBrowserRouter([
            {
                path: "/",
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
              path: "/LoginRegister",
              element: <LoginRegister />,
           },
            {
                path: "/ContactPage",
                element: <ContactPage />,
            }
          
   
])  
