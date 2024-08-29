import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

import Login from './pages/LoginForm.tsx';
import Register from './pages/RegisterForm.tsx';
import RNC from './components/forms/RNC/index.tsx';
import { Error } from './pages/Error.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "app/formrnc",
        element: <RNC />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
