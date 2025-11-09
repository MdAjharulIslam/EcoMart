import { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();
  
  const [liked, setLiked] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false); 

  return product && (
    <>
      {/* Product Card */}
      <div
        onClick={() => {
          navigate(`/products/${product.category.toLowerCase().trim()}/${product._id}`);
          window.scrollTo(0, 0);
        }}
        className="relative border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-gray-300 min-w-56 max-w-56 w-full hover:scale-105 transition-all shadow-green-800 shadow-2xl"
      >
        {/* Top Right Icons Group */}
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          {/* Eye Icon for Quick Preview */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreviewOpen(true);
            }}
            className="text-gray-400 hover:text-green-600 transition-colors duration-300 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>

          {/* Heart Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className={`transition-all duration-300 hover:cursor-pointer bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md ${
              liked ? "text-green-600" : "text-gray-400"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Dynamic Badge */}
        {product.badge && (
          <span
            className={`absolute top-2 left-2 md:left-4 px-2 py-1 rounded-md text-[10px] md:text-xs font-semibold tracking-wide shadow-md z-10
              ${
                product.badge === "20% OFF"
                  ? "bg-red-500 text-white"
                  : product.badge === "New Arrival"
                  ? "bg-green-500 text-white"
                  : product.badge === "Limited Stock"
                  ? "bg-yellow-400 text-black"
                  : "bg-blue-500 text-white"
              }`}
          >
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition h-26 object-cover max-w-26 md:max-w-36"
            src={product.image[0]}
            alt={product.name}
          />
        </div>

        {/* Product Info */}
        <div className="text-gray-500/60 text-sm">
          <p>{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>

          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="md:w-3.5 w-3"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt=""
                />
              ))}
            <p>(4)</p>
          </div>

          <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-primary">
              {currency} {product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                {currency} {product.price}
              </span>
            </p>

            <div onClick={(e) => e.stopPropagation()} className="text-primary">
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded text-primary cursor-pointer"
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} alt="cart_icon" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">{cartItems[product._id]}</span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="bg-gray-300 p-6 rounded-lg relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-green-500"
              onClick={() => setPreviewOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <img src={product.image[0]} alt={product.name} className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-gray-700">{product.category}</p>
            <p className="mt-1 text-primary font-semibold">{currency} {product.offerPrice}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;