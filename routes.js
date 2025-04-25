// routes.js , stores all the routes in my application

import { createBrowserRouter as browserRouter } from "react-router";
import Home from "./src/pages/Home";
import AboutUs from "./src/pages/AboutUs";
import ContactUs from "./src/pages/ContactUs";
import Layout from "./src/pages/Layout";

const routes = [
  {
    Component: Layout,
    children: [
      { path: "/home", Component: Home },
      { path: "/about", Component: AboutUs },
      { path: "/contact", Component: ContactUs },
    ],
  },
];

export const router = browserRouter(routes);
