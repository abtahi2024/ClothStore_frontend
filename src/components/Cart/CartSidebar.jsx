import React, { useState } from "react";
import { Link } from "react-router";
import authApiClient from "../../services/auth-api-client";

const CartSidebar = ({ cartId, totalPrice, itemsCount }) => {
  const [success, setSuccess] = useState(false);
  // const deleteCart = () => {
  //   localStorage.removeItem("cartId");
  // };

  const createOrder = async () => {
    try {
      const order = await authApiClient.post("/orders/", { cart_id: cartId });
      if (order.status === 201) {
        localStorage.removeItem("cartId");
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* Cart Total */}
      <div className="bg-[#F5F4F2] p-8">
        {success && (
          <p className="text-green-600 text-sm mb-4 font-semibold">
            ✅ Order created successfully
          </p>
        )}
        <h2 className="text-xl uppercase tracking-widest font-semibold mb-8">
          Cart Total
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-sm text-black">Subtotal</span>
            <span className="text-sm font-bold text-[#D14D4D]">
              {itemsCount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-black">Total</span>
            <span className="text-sm font-bold text-[#D14D4D]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <Link to="/orders">
          <button
            disabled={itemsCount === 0}
            onClick={createOrder}
            className="w-full bg-black text-white py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-black/80 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
