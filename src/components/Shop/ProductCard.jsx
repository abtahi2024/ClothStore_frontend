import React from "react";
import { BiHeart, BiSearch, BiSolidHeart, BiStar } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { Link } from "react-router";

const ProductCard = ({ p, addToWishlist, wishlist, removeWishlist }) => {
  const isWishlisted = (productId) => {
    return wishlist?.some((item) => item?.product?.id === productId);
  };
  // selacte the wishlist
  const toggleWishlist = async (productId) => {
    const existing = wishlist?.find((item) => item?.product?.id === productId);
    if (existing) {
      await removeWishlist(existing.id);
    } else {
      await addToWishlist(productId);
    }
  };
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/5 overflow-hidden bg-[#f3f2f5] mb-4">
        <img
          src={p.images[0]?.image}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Floating Action Buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
          <button
            onClick={() => toggleWishlist(p?.id)}
            className="w-10 h-10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm"
          >
            {isWishlisted(p?.id) ? (
              <BiSolidHeart className="text-red-500" />
            ) : (
              <BiHeart className="hover:text-rose-500" />
            )}
          </button>
          <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm">
            <BsRepeat className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm">
            <BiSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Link to={`/products/${p.id}`}>
          <button className="hover:text-red-600 text-sm font-bold hover:opacity-70 transition-opacity flex items-center gap-1">
            + Add To Cart
          </button>
        </Link>
        <h3 className="text-sm text-gray-500 font-medium">{p.name}</h3>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <BiStar
              key={i}
              className={`w-3.5 h-3.5 ${
                i < p.ratings
                  ? "fill-orange-400 text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between pt-1">
          <p className="text-lg font-bold text-black">${p.price}</p>
          {/* Color Swatches */}
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full bg-indigo-500 cursor-pointer border border-transparent hover:border-gray-300" />
            <div className="w-4 h-4 rounded-full bg-stone-700 cursor-pointer border border-transparent hover:border-gray-300" />
            <div className="w-4 h-4 rounded-full bg-orange-300 cursor-pointer border border-transparent hover:border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
