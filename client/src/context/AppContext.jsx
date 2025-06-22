import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserlogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

 //fatch seller data
const fatchSeller = async () => {
 try {
  const {data} = await axios.get('/api/seller/is-auth');
  if(data.success){
    setIsSeller(true)
  }else{
    setIsSeller(false)
  }
 } catch (error) {
  setIsSeller(false);
 }
}

// fetch user Auth status , user data and cart items

const fetchUser = async () => {
  try {
    const {data} = await axios.get('/api/user/is-auth');
    if(data.success){
      setUser(data.user);
      setCartItems(data.user.cartItems);
    }

  } catch (error) {
    setUser(null)
  }
}

//fetcjjh all prducts
  const fetchProducts = async () => {
   try {
    const {data} = await axios.get('/api/product/list')
    if(data.success){
      setProducts(data.products)
    }else{
      toast.error(data.message)
    }
   } catch (error) {
    toast.error(error.message)
   }
  };

  //add product to cart

  

const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        cartData[itemId] += 1;
    } else {
        cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to Cart");
};
//update cart items quentity

const updateCartItem = (itemId, quantity) => {
  // Create a shallow copy of the cartItems object
  const updatedCartData = { ...cartItems };
  
  // Update the quantity for the specified item
  updatedCartData[itemId] = quantity;

  // Set the updated cartItems object into state
  setCartItems(updatedCartData);

  // Optionally, show a toast notification
  toast.success("Cart Updated");
};


// remove product from cart 
const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        cartData[itemId] -= 1;
        if (cartData[itemId] === 0) {
            delete cartData[itemId];
        }
        setCartItems(cartData);
        toast.success("Removed from Cart");
    }
};

//get cart items count
const getCartCount = ()=>{
  let totalCount = 0;
  for(const item in cartItems){
    totalCount+=cartItems[item];
  }
  return totalCount;
}

// get cart total amount
const getCartAmount = ()=>{
  let totalAmount = 0;
  for(const items in cartItems){
    let itemInfo= products.find((product)=> product._id ===items);
    if(cartItems[items] > 0){
      totalAmount+=itemInfo.offerPrice * cartItems[items]
    }
  }
  return Math.floor(totalAmount * 100)/100;
}



  useEffect(() => {
    fetchUser();
     fetchProducts();
      fatchSeller();
    }, []);


    //updata database cart items

    useEffect(() => {
      const updateCart = async () => {
        try {
          // Ensure you're passing the correct data (userId and cartItems)
          const { data } = await axios.post('/api/cart/update', {
            userId: user._id, // Make sure you have user._id
            cartItems, // This should be the updated cart data
          });
    
          if (data.success) {
            // Handle successful cart update (optional)
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
    
      if (user) {
        updateCart();
      }
    }, [cartItems, user]); // Make sure to include `user` as a dependency
    

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserlogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    axios,
    fetchProducts,
    fetchUser,
    setCartItems,
    



  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
