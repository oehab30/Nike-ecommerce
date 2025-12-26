// Routes.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/common/layout";
import Home from "../pages/Home";
import Shop from "../pages/Menu";
import Cart from "../Pages/cart";
import About from "../Pages/About";
import Contact from "../Pages/contact";
import Error from "../pages/Error";
import Admin from '../pages/admin'
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Menu/:category", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/admin", element: < Admin/> },
    ],
  },
 { path: "*", element: <Error/> },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
