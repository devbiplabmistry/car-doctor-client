import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/mainLayout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import BookService from "../pages/BookService/BookService";
import SpecificBook from "../pages/Specific/SpecificBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/login",
            element:<Login></Login>
          },
          {
            path:"/signup",
            element:<SignUp></SignUp>
          },
          {
            path:"/details/:id",
            element:<BookService></BookService>,
            loader:({params}) =>fetch(`http://localhost:5000/details/${params.id}`)
          },
          {
            path:"/service",
            element:<SpecificBook></SpecificBook>,
            loader:() =>fetch('http://localhost:5000/service')
          }
        ]
    },
]);


export default router;