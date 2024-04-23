import NavBar from "../../Components/Nav";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
