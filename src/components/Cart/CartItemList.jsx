import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, X } from "lucide-react";
import defaultImage from "../../assets/images/hero/default.jpg";

const CartItemList = ({ items, handleUpdateQuantity, handleRemoveItem }) => {
  return (
    <div>
      <div className="mt-4 space-y-0">
        <AnimatePresence mode="popLayout">
          {items?.length > 0 ? (
            items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-[2fr_1fr_1fr_40px] items-center gap-4 py-8 border-b border-black/5 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-[#F5F5F5] shrink-0 overflow-hidden">
                    <img
                      src={item.product?.images[0]?.image || defaultImage}
                      alt={item.product?.name}
                      className="w-full h-full object-cover mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      {item.product?.name}
                    </h3>
                    <p className="text-xs text-black/40 font-mono">
                      ${item.product?.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1),
                      )
                    }
                    className="p-1 hover:bg-black/5 rounded transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <input
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, Number(e.target.value))
                    }
                    className="text-sm font-mono w-4 text-center"
                    value={item?.quantity}
                  />
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    className="p-1 hover:bg-black/5 rounded transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                <div className="text-right font-medium text-sm">
                  ${item.total_price?.toFixed(2)}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <ShoppingBag className="mx-auto mb-4 text-black/10" size={48} />
              <p className="text-black/40 uppercase tracking-widest text-xs">
                Your cart is empty
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CartItemList;
