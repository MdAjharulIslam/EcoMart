import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();
  const [loading, setLoading] = useState(true);

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/user');
      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch your orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchMyOrders();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-primary text-xl font-semibold">Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className="mt-16 pb-16 flex flex-col items-center">
      {/* Page Header */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-3xl font-bold uppercase text-gray-800">My Orders</p>
        <div className="w-24 h-1 bg-primary rounded-full mt-2"></div>
      </div>

      {myOrders.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No orders found!</p>
      ) : (
        myOrders.map((order, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg mb-10 p-5 shadow-lg w-full max-w-4xl bg-white hover:shadow-xl transition-shadow"
          >
            {/* Order Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 text-gray-600 md:text-base gap-2">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <span className="font-medium">Order ID: <span className="text-gray-800">{order._id}</span></span>
                <span>Payment: <span className="text-gray-800">{order.paymentType}</span></span>
                <span className='text-green-600 text-lg'>Total Amount: <span className="text-gray-800">{currency} {order.amount}</span></span>
              </div>

              {/* Status Badge on Right */}
              <span
                className={`mt-2 md:mt-0 inline-block px-3 py-1 rounded-full font-semibold text-xs md:text-sm ${
                  order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Shipped"
                    ? "bg-indigo-100 text-indigo-700"
                    : order.status === "Delivered"
                    ? "bg-emerald-100 text-emerald-700"
                    : order.status === "Cancelled"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {order.status || "Pending"}
              </span>
            </div>

            {/* Order Items */}
            {order.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex flex-col md:flex-row md:items-center justify-between gap-6 py-4 px-3 border-b border-gray-200 ${
                  order.items.length === itemIndex + 1 ? '' : ''
                }`}
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    {item.product && item.product.image && (
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.product ? item.product.name : 'Product not found'}
                    </h2>
                    <p className="text-gray-500 text-sm">Category: {item.product ? item.product.category : 'Unknown'}</p>
                  </div>
                </div>

                {/* Quantity & Date */}
                <div className="flex flex-col justify-center text-gray-600 text-sm md:text-base">
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>

                {/* Amount */}
                <p className="text-primary text-lg font-semibold">
                  Amount: {currency} {item.product ? item.product.offerPrice * item.quantity : 0}
                </p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
