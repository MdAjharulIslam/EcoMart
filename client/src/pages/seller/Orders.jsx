import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import toast from 'react-hot-toast';

const Orders = () => {
  const { currency, axios } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusOrder = ["Pending", "Approved", "Shipped", "Delivered", "Cancelled"];

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/seller');
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const { data } = await axios.put(`/api/order/${orderId}/status`, { status: newStatus });
      if (data.success) {
        toast.success("Order status updated!");
        setOrders(prev =>
          prev.map(o => o._id === orderId ? { ...o, status: newStatus } : o)
        );
      } else {
        toast.error(data.message || "Failed to update status");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll bg-gray-50">
      <div className="md:p-10 p-4 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Orders List</h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 max-w-4xl rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Products Info */}
              <div className="flex gap-4 md:gap-6 max-w-80">
                <img className="w-12 h-12 object-cover rounded-md" src={assets.box_icon} alt="Box Icon" />
                <div className="flex flex-col gap-1">
                  {order.items.map((item) => (
                    <p key={item._id} className="font-medium text-gray-700">
                      {item.product ? item.product.name : "Product not found"}{" "}
                      <span className="text-primary">x {item.quantity}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Address */}
              {order.address && (
                <div className="text-sm md:text-base text-gray-600">
                  <p className="text-gray-800 font-medium">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>{order.address.street}, {order.address.city}</p>
                  <p>{order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                  <p>{order.address.phone}</p>
                </div>
              )}

              {/* Amount */}
              <p className="font-medium text-lg text-gray-900 my-auto">
                {currency}{order.amount}
              </p>

              {/* Extra Info */}
              <div className="flex flex-col text-sm md:text-base text-gray-600 gap-2">
                <p>Method: {order.paymentType}</p>
                <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>

                {/* Status Dropdown with restriction */}
                
              </div>
              <div className="flex items-center gap-2 mt-2">
                  <span className="font-medium text-gray-800">Status:</span>
                 <select
                    value={order.status || "Pending"}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {statusOrder.map((status) => {
                      let disabled = false;

                      switch (order.status) {
                        case "Pending":
                          disabled = false;
                          break;
                        case "Approved":
                          disabled = status === "Pending" || status === "Cancelled";
                          break;
                        case "Shipped":
                          disabled = ["Pending", "Approved", "Cancelled"].includes(status);
                          break;
                        case "Delivered":
                          disabled = status !== "Delivered";
                          break;
                        case "Cancelled":
                          disabled = true;
                          break;
                        default:
                          disabled = false;
                      }

                      return (
                        <option key={status} value={status} disabled={disabled}>
                          {status}
                        </option>
                      );
                    })}
                  </select>
                </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
