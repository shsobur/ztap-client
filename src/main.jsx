import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./Layout/Routes/MainRoutes";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Layout/Components/AuthProvider/AuthProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
