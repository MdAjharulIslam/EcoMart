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

    
    const positions = [
      0,      
      Math.floor(total * 0.1),
      Math.floor(total * 0.2),
      Math.floor(total * 0.3),
      Math.floor(total * 0.4),
      Math.floor(total * 0.5), 
      Math.floor(total * 0.6),
      Math.floor(total * 0.7),
      Math.floor(total * 0.8),
      Math.floor(total * 0.3),
      Math.floor(total * 0.85),
      total - 1  
    ];

    const uniquePositions = [...new Set(positions.filter(pos => pos < total && pos >= 0))];
    
    
    uniquePositions.slice(0, 12).forEach(pos => {
      selected.push(inStockProducts[pos]);
    });

    
    for (let i = selected.length; i < 12 && i < total; i++) {
      const remainingIndex = i % total;
      if (!selected.some(p => p === inStockProducts[remainingIndex])) {
        selected.push(inStockProducts[remainingIndex]);
      }
    }

    return selected.slice(0, 12);
  };

  const bestSellers = getBestSellers();

  return (
    <div className="mt-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Best Sellers
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Our most popular products loved by thousands
        </p>
        <div className="w-20 h-1 mx-auto mt-8 bg-gray-900 rounded-full shadow-sm" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-6 lg:gap-6 mt-6">
        {bestSellers.map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
