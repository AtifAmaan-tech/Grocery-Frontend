import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../category/category";
import Values from "../Values/Values";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
    </div>
  );
};

export default Home;
