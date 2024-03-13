import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Releve from "./pages/Releve";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Configuration from "./pages/Configuration";
import CreationReleve from "./pages/CreationReleve";
import Dashboard from "./pages/Dashboard";
import UserActivity from "./pages/components/UserActivity";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <UserActivity />,
      },
      {
        path: "/dashboard/configuration",
        element: <Configuration />,
      },
    ],
  },

  {
    path: "/releve",
    element: <Releve />,
  },
  {
    path: "/creation",
    element: <CreationReleve />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
