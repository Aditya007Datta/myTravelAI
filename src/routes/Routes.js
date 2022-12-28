import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home";
import Main from "../shared/Layout/Main";

export const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      // element: <AboutUs></AboutUs>
    }]
}
])