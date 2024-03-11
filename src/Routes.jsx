import React from "react";
import { useRoutes } from "react-router-dom";
//import Home from "pages/Home";
//import NotFound from "pages/NotFound";
import Offers from "pages/Offers";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Offers /> },
    // { path: "*", element: <NotFound /> },
    // {
    //   path: "offers",
    //   element: <Offers />,
    // },
    // {path: "/offers", element: <Offers/>}
  ]);

  return element;
};

export default ProjectRoutes;
