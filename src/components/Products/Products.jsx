import React, { useState } from "react";
import Heading from "../Heading/Heading";

const Products = () => {
  const category = ["All", "Fruits", "Vegitables", "Dairy", "SeaFood"];
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <section className="max-w-[1400] mx-auto px-10">
      <Heading content="Products" highlight="Our" />

      {/* Tabs */}
      <div className="flex gap-2 justify-center mt-4 mb-4 h-auto">
        {category.map((category) => {
          return (
            <button
              key={category}
              className={`cursor-pointer font-semibold rounded-md w-[80px] ${selectedTab === category ? "bg-gradient-to-b from-green-400 to-green-500 text-white" : "bg-zinc-200"}`}
              onClick={() => setSelectedTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
