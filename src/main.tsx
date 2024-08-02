import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryProvider } from "./utils/CountryContext";
import CountryDetail from "./routes/additionalInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/country/:name",
    element: <CountryDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryProvider>
      <RouterProvider router={router} />
    </CountryProvider>
  </React.StrictMode>,
);
