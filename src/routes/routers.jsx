import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/home";
import BookingItems from "../pages/bookingItems/bookingItems";
import LogIn from "../pages/log/logIn";
import SingUp from "../pages/singup/singUp";
import PriveteRoute from "../routes/priveteRoute";
import ChackOut from "../pages/chackOut/chackOut"

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/chackout/:id",
        element: <PriveteRoute><ChackOut></ChackOut></PriveteRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <BookingItems></BookingItems>,
      },
    ],
  },
]);
export default Routers;
