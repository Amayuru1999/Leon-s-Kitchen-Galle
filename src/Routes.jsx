import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MacBookPro14One from "pages/MacBookPro14One";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "macbookpro14one",
      element: <MacBookPro14One />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
