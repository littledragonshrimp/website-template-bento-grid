import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Impact from "./pages/Impact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/about",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
