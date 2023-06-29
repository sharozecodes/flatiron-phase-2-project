import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Horoscope from "./Components/Horoscope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:zodiacSign",
    element: <Horoscope />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
