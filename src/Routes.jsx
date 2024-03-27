import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CalendarDayNoevent from "pages/CalendarDayNoevent";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "calendardaynoevent",
      element: <CalendarDayNoevent />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
