import { createBrowserRouter } from "react-router-dom";
import Home  from "../Pages/Home";
import GameCard from "../Pages/GameCard";
import GameMillonaire from "../Pages/GameMillonaire";

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
            }
          
   
])  