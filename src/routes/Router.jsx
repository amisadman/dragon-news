import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Category from "../components/Category";
import CategoryNews from "../Pages/CategoryNews";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>This is auth</h2>,
  },
  {
    path: "/news",
    element: <h2>This is news</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default Router;
