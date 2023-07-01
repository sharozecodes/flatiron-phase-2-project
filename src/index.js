import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Zodiac from "./Components/Zodiac";
import UserList from "./Components/UserList";
//import Horoscope from "./Components/Horoscope";
import Horoscope from "./Components/Horoscope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:zodiacSign",
    element: <Zodiac />,
  },
  {
    path: "/userlist",
    element: <UserList />,
  },
  {
    path: "/:zodiacSign/horoscope",
    element: <Horoscope />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
