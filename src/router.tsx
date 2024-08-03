import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { Error } from "./pages/Error";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import ActiveClients from "./pages/Realtor/ActiveUsers";
import Visits from "./pages/Realtor/Visits";
import RealtorsList from "./pages/Admin/RealtorsList";
import MarketCampaign from "./pages/Admin/MarketCampaign";
import ManageRealtors from "./pages/Admin/ManageRealtors";
import PropertyVisits from "./pages/Client/PropertyVists";

export const router: any = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
  },
  {
    path: "*",
    element: <NotFound />
  }
])