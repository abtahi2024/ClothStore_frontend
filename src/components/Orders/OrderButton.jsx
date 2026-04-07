import React, { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const OrderButton = ({ order, user }) => {
  const [loading, setLoading] = useState(false);
  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/payment/initiale/", {
        amount: order.total_price,
        orderId: order.id,
        numItems: order.items?.length,
      });
      console.log(response);
      if (response.data.payment_url) {
        setLoading(false);
        window.location.href = response.data.payment_url;
      } else {
        alert("payment failed");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-10 flex justify-end">
      {!user.is_staff && order.status === "Pending" && (
        <button
          onClick={handlePayment}
          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-[0.95]"
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      )}
    </div>
  );
};

export default OrderButton;
