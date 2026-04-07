import { X } from "lucide-react";
import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";
import { Link } from "react-router";

const Wishlist = () => {
  const { wishlist, fetchWishlist, removeWishlist } = useCartContext();
  useEffect(() => {
    fetchWishlist();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-[#F9F9F9] font-sans text-[#1A1A1A]">
        <main className="max-w-6xl mx-auto px-4 py-20">
          <div className="bg-white shadow-[0_10px_50px_rgba(0,0,0,0.03)] rounded-sm p-12 md:p-20">
            <div className="flex items-center gap-3 mb-16">
              <h1 className="text-3xl font-medium tracking-tight">
                My Wishlist
              </h1>
            </div>

            {/* Wishlist Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[13px] text-zinc-400 font-normal border-b border-zinc-100">
                    <th className="pb-6 w-10"></th>
                    <th className="pb-6 w-32"></th>
                    <th className="pb-6 font-normal">Product Name</th>
                    <th className="pb-6 font-normal">Unit Price</th>
                    <th className="pb-6 font-normal text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {wishlist?.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-zinc-100 group"
                    >
                      <td className="py-8">
                        <button
                          onClick={() => removeWishlist(item?.id)}
                          className="text-zinc-500 hover:text-red-500 transition-colors"
                        >
                          <X size={18} strokeWidth={1} />
                        </button>
                      </td>
                      <td className="py-8 pr-8">
                        <div className="w-24 h-32 bg-zinc-50 overflow-hidden">
                          <img
                            src={item.product.images[0]?.image}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </td>
                      <td className="py-8">
                        <span className="text-[15px] font-medium text-[#1A1A1A]">
                          {item.product.name}
                        </span>
                      </td>
                      {/* Price */}
                      <td className="py-8">
                        <span>${item.product.price.toFixed(2)}</span>
                      </td>
                      <td className="py-8 text-right">
                        <Link to={`/shop/${item.product.id}`}>
                          <button className="bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-zinc-800 transition-colors">
                            Add to Cart
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {wishlist.length === 0 && (
              <div className="py-20 text-center text-zinc-400">
                Your wishlist is empty.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wishlist;
