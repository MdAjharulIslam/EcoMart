import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const { products } = useAppContext();

  
  const inStockProducts = products.filter((product) => product.inStock);

  
  const getBestSellers = () => {
    const total = inStockProducts.length;
    if (total === 0) return [];

    const selected = [];

    // 1️⃣ Pick one from the start
    if (total > 0) selected.push(inStockProducts[0]);

    // 2️⃣ Pick one from near the start (e.g. 2nd or 3rd)
    if (total > 2) selected.push(inStockProducts[Math.floor(total * 0.2)]);

    // 3️⃣ Pick one from the middle
    if (total > 4) selected.push(inStockProducts[Math.floor(total * 0.5)]);

    // 4️⃣ Pick one from near the end
    if (total > 6) selected.push(inStockProducts[Math.floor(total * 0.8)]);

    // 5️⃣ Pick the last one
    if (total > 1) selected.push(inStockProducts[total - 1]);

    return selected;
  };

  const bestSellers = getBestSellers();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Seller</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {bestSellers.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
