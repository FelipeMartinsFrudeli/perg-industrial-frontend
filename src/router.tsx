import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { Error } from "./pages/Error";

export const router: any = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])