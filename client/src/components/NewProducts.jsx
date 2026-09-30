
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";
const NewProducts = () => {

    const { products } = useAppContext();
  return (
    <div className="mt-16">


         <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          New Arrible
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Our most new products loved by thousands
        </p>
        <div className="w-20 h-1 mx-auto mt-8 bg-gray-900 rounded-full shadow-sm" />
      </div>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-6 lg:gap-6 mt-6 ">
        {products.filter((product) => product.inStock).slice(0, 6)
          
          .map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
      </div>
      
    </div>
  )
}

export default NewProducts
