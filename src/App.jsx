import React from "react";
import Home from "./components/Home/Home";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import MeatAndSeafood from "./components/MeatAndSeafood/MeatAndSeafood";
import Layout from "./components/Layout/Layout";


const App = () => {

  const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout />,
  
    children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:"/fruits",
      element: <Fruits />
    },
    {
      path:"/dairy",
      element: <Dairy />
    },
    {
      path:"meat-and-seafood",
      element: <MeatAndSeafood />
    }
    ]

  }

  ]);
  return <>
  <RouterProvider router={router}/>
  </>
};

export default App;
