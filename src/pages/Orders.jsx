import { motion, AnimatePresence } from "framer-motion";

import OrderCard from "../components/Orders/OrderCard";
import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    authApiClient.get(`/orders/`).then((res) => setOrder(res.data));
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
      if (response.status === 200) {
        setOrder((prevOrder) =>
          prevOrder.map((order) =>
            order.id === orderId ? { ...order, status: "Canceled " } : order,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full mx-auto border border-black/5"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-black/5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">
                Order Details
              </h2>
            </div>
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onCancel={handleCancelOrder}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Orders;
