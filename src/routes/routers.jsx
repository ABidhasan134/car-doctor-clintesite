import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/home";
import LogIn from "../pages/log/logIn";
import SingUp from "../pages/singup/singUp";

const Routers= createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/singup",
          element: <SingUp></SingUp>
        }

      ]
    },
  ])
  export default Routers;