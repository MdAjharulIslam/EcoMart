import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collections across all major categories
          </p>
          <div className="w-20 h-1 mx-auto mt-8 bg-gray-900 rounded-full shadow-sm" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center
                       backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/40 border border-white/50
                       shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-500
                       cursor-pointer min-h-[140px]"
              style={{
                "--card-bg": category.bgColor,
                background: `linear-gradient(135deg, var(--card-bg)20%, rgba(255,255,255,0.9)), linear-gradient(135deg, rgba(255,255,255,0.1), transparent)`,
              }}
              onClick={() => {
                navigate(`products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              />

              <div
                className="relative z-10 w-20 h-20 mb-4 flex items-center justify-center rounded-2xl 
                              bg-white/70 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={category.image}
                  alt={category.text}
                  className="w-9 h-9 sm:w-12 sm:h-12 object-contain drop-shadow-2xl
             sm:brightness-0 sm:group-hover:brightness-100 
             transition-all duration-300"
                />
              </div>

              
              <p
                className="relative z-10 text-base font-bold text-gray-800 bg-gradient-to-r 
                           from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent
                           group-hover:scale-105 transition-transform duration-300"
              >
                {category.text}
              </p>

              <div
                className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 
                              rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 
                              animate-ping"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
