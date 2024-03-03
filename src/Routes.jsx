import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/OrderingPage/Home";
import NotFound from "pages/NotFound";
import OrderingPage from "pages/OrderingPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "orderingpage",
      element: <OrderingPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
