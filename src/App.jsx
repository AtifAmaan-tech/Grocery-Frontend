import React from "react";
import Home from "./components/Home/Home";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import MeatAndSeafood from "./components/MeatAndSeafood/MeatAndSeafood";


const App = () => {

  const router = createBrowserRouter([
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
  ]);
  return <>
  <RouterProvider router={router}/>
  </>
};

export default App;
