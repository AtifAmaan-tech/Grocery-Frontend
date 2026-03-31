import React, { useState } from "react";
import Heading from "../Heading/Heading";
import productList from "./productList";
import Card from "../card/card.jsx";

const Products = () => {
  const category = ["All", "Fruits", "Vegitables", "Dairy", "SeaFood"];
  const [selectedTab, setSelectedTab] = useState("All");

  const renderCards = productList.filter(product => {
    if (selectedTab === "All") return true;
    return product.category === selectedTab;
  }).map((product) => {
    return (
      <Card
        key = {product.id}
        name={product.name}
        price={product.price}
        image = {product.image}
        category = {product.category}
      />
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto px-2 md:px-5">
      <Heading content="Products" highlight="Our" />

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 md:gap-2 justify-center mt-4 mb-4 h-auto">
        {category.map((category) => {
          return (
            <button
              key={category}
              className={`cursor-pointer font-semibold rounded-md px-5 py-1 hover:bg-zinc-300 ${selectedTab === category ? "bg-gradient-to-b from-green-400 to-green-500 text-white" : "bg-zinc-200"}`}
              onClick={() => setSelectedTab(category)}
            >
              <span className="py-">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Products listing */}
      <div className = "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 px-6 md:px-20 mt-15 gap-y-5">{renderCards}</div>
    </section>
  );
};

export default Products;
