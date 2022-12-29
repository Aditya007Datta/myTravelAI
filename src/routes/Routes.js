import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Project from "../pages/Project/Project";
import Main from "../shared/Layout/Main";

export const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/about',
      element: <AboutUs>About Us</AboutUs>,
    },
    {
      path: '/project',
      element: <Project>Project</Project>,
    },



  ]
}
])
