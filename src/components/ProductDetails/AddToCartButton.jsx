import { Minus, Plus, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import useCartContext from "../../hooks/useCartContext";

const AddToCartButton = ({ quantity, setQuantity, product }) => {
  const { AddCartItems } = useCartContext();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const addToCart = async () => {
    setIsAdding(true);
    try {
      await AddCartItems(product.id, quantity);
      setIsAdded(true);
    } catch (error) {
      console.log(error);
    }
    setIsAdding(false);
  };
  return (
    <div>
      {/* Actions */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center border border-gray-200 h-12">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 hover:bg-gray-50 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-sm font-medium">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 hover:bg-gray-50 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
        <button
          onClick={addToCart}
          disabled={isAdding || isAdded || product.stock === 0}
          className="flex-1 bg-black text-white h-12 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
        >
          {isAdding ? (
            <span className="flex-1 bg-black text-white h-12 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
              <span className="loading loading-spinner loading-sm mr-2"></span>
              <ShoppingBag size={16} />
              Adding...
            </span>
          ) : isAdded ? (
            <span className="flex-1 bg-black text-white h-12 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={16} />
              Added to cart
            </span>
          ) : (
            <span className="flex-1 bg-black text-white h-12 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={16} />
              Add to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
