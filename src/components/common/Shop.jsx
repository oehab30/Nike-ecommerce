import React from "react";
import { useParams } from "react-router-dom";
import Tap from "@/components/common/Tap";
import Categories from '../common/Categories.jsx';
function Shop() {
  // Get the category from the URL (e.g. /shop/Nike)
  const { category } = useParams();

  return (
    <div className="p-6">
      {/* Breadcrumb */}

      <Categories  />
      <Tap PageName={category} />


      <h1 className="text-3xl font-bold text-center mt-8">
        Welcome to {category} Collection
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Explore the best {category} products available now!
      </p>
    </div>
  );
}

export default Shop;
