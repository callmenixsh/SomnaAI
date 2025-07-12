import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/home.jsx";
import About from "./Pages/about.jsx";
import Science from "./Pages/science.jsx";
import Visual from "./Pages/visualization.jsx";
import Dream from "./Pages/dream.jsx";
import Gallery from "./Pages/dreamgallery.jsx";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

import Notfound from "./Components/notfound.jsx";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow min-h-full">{children}</div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },  {
    path: "/science",
    element: (
      <Layout>
        <Science />
      </Layout>
    ),
  },  {
    path: "/gallery",
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },  {
    path: "/visualization",
    element: (
      <Layout>
        <Visual />
      </Layout>
    ),
  },  {
    path: "/dream",
    element: (
      <Layout>
        <Dream />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <Notfound />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
