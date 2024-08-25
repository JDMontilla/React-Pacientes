import { useRoutes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import  {Home}  from "./Home";
import  {Crear}  from "./Crear";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />, },
    { path: "/crear", element: <Crear />, },
    
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
