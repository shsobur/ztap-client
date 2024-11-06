import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./Layout/Routes/MainRoutes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
