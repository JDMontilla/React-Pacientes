import { useRoutes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import  {Home}  from "./Home";
import  {Create}  from "./Create";
import "./App.css";
import axios from "axios";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />, },
    { path: "/create", element: <Create />, },
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
