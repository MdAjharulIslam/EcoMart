import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("newest"); 
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  useEffect(() => {
    let sortedProducts = [...products];

   
    if (sortType === "newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    
    if (sortType === "low-high") {
      sortedProducts.sort((a, b) => a.offerPrice - b.offerPrice);
    }

   
    if (sortType === "high-low") {
      sortedProducts.sort((a, b) => b.offerPrice - a.offerPrice);
    }

  
    sortedProducts = sortedProducts.filter(
      (product) =>
        product.offerPrice >= priceRange.min &&
        product.offerPrice <= priceRange.max
    );

    
    if (searchQuery.length > 0) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilterProducts(sortedProducts);
  }, [products, searchQuery, sortType, priceRange]);

  const resetFilters = () => {
    setSortType("newest");
    setPriceRange({ min: 0, max: 10000 });
  };

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full pr-4 md:pr-20 gap-6 md:gap-8 mb-6">
        <div className="flex flex-col w-full lg:w-max">
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            All Products
          </p>
          <div className="w-16 md:w-20 h-1 bg-primary rounded-full mt-2"></div>
        </div>

        <div className="w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 sm:p-4 bg-gray-100 border border-gray-200 rounded-xl shadow-sm">
            <div className="flex flex-col flex-1 gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Sort by
              </span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="newest">Newest</option>
                  <option value="low-high">Price: Low → High</option>
                  <option value="high-low">Price: High → Low</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Price range
              </span>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg flex-shrink-0">
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      min: Number(e.target.value) || 0,
                    }))
                  }
                  className="w-14 sm:w-16 px-2 py-1 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary text-right flex-shrink-0"
                  placeholder="0"
                />
                <span className="text-sm text-gray-500 hidden sm:inline">
                  —
                </span>
                <span className="text-lg text-gray-500 sm:hidden mx-1">•</span>
                <input
                  type="number"
                  min="0"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      max: Number(e.target.value) || 10000,
                    }))
                  }
                  className="w-14 sm:w-16 px-2 py-1 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary text-right flex-shrink-0"
                  placeholder="10000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Actions
              </span>
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors flex items-center justify-center gap-1 whitespace-nowrap flex-shrink-0 h-full"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="hidden sm:inline">Reset</span>
                <span className="sm:hidden">R</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-6 lg:gap-6 mt-6 ">
        {filterProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
