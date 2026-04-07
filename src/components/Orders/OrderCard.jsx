import React, { useState } from "react";
import OrderButton from "./OrderButton";
import useAuthContext from "../../hooks/useAuthContext";
import authApiClient from "../../services/auth-api-client";

const OrderCard = ({ order, onCancel }) => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    try {
      const response = await authApiClient.patch(
        `/orders/${order.id}/update_status/`,
        { status: newStatus },
      );
      if (response.status === 200) {
        setStatus(newStatus);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* Order Info Banner */}
      <div className="bg-[#F8F9FA] px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Order{" "}
            <span className="text-slate-600 font-mono text-base">
              #{order.id}
            </span>
          </h3>
          <p className="text-sm">Placed on {order.created_at}</p>
        </div>
        <div className="flex items-center gap-4">
          {user.is_staff ? (
            <select
              value={status}
              onChange={handleStatusChange}
              className="px-3 py-1 rounded-full text-white text-sm font-medium bg-black"
            >
              <option value="Pending">Pending</option>
              <option value="Ready To Ship"> Ready To Ship</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
          ) : (
            <span
              className={`px-3 py-1  text-white text-xs font-bold rounded-full uppercase tracking-wider ${
                order.status === "Pending" ? "bg-[#FF4D4D]" : "bg-green-500"
              }`}
            >
              {order.status}
            </span>
          )}
          {order.status !== "Delivered" &&
            order.status !== "Canceled" &&
            !user.is_staff && (
              <button
                onClick={() => onCancel(order.id)}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-all"
              >
                Cancel
              </button>
            )}
        </div>
      </div>

      {/* Items Table */}
      <div className="p-8">
        <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">
          Order Items
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="py-4 px-4 text-sm font-bold text-slate-900 border-b border-slate-200">
                  Product
                </th>
                <th className="py-4 px-4 text-sm font-bold text-slate-900 border-b border-slate-200 text-right">
                  Price
                </th>
                <th className="py-4 px-4 text-sm font-bold text-slate-900 border-b border-slate-200 text-center">
                  Quantity
                </th>
                <th className="py-4 px-4 text-sm font-bold text-slate-900 border-b border-slate-200 text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-slate-50/30 transition-colors"
                >
                  <td className="py-5 px-4 text-sm text-slate-600 border-b border-slate-100">
                    {item.product.name}
                  </td>
                  <td className="py-5 px-4 text-sm text-slate-600 border-b border-slate-100 text-right font-mono">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-5 px-4 text-sm text-slate-600 border-b border-slate-100 text-center font-mono">
                    {item.quantity}
                  </td>
                  <td className="py-5 px-4 text-sm text-slate-900 border-b border-slate-100 text-right font-bold font-mono">
                    ${item.total_price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 flex flex-col items-end space-y-3">
          <div className="flex justify-between w-full max-w-60">
            <span className="text-sm text-slate-500">Subtotal:</span>
            <span className="text-sm font-bold text-slate-900 font-mono">
              ${order.total_price.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between w-full max-w-60">
            <span className="text-sm text-slate-500">Shipping:</span>
            <span className="text-sm font-bold text-slate-900 font-mono">
              ${order.total_price}
            </span>
          </div>
          <div className="flex justify-between w-full max-w-60 pt-3 border-t border-slate-200">
            <span className="text-base font-bold text-slate-900">Total:</span>
            <span className="text-base font-bold text-slate-900 font-mono">
              ${order.total_price.toFixed(2)}
            </span>
          </div>
        </div>
        {/* Footer Action */}
        <OrderButton order={order} user={user} />
      </div>
    </div>
  );
};

export default OrderCard;
