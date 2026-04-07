import React from "react";

const ProductImage = () => {
  return (
    <div className="relative group">
      {/* Sale Badge */}
      <div className="absolute -top-4 right-0 md:-right-8 z-10 bg-[#111111] text-white w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
        <span className="text-[10px] md:text-xs font-medium tracking-widest opacity-80 mb-1">
          Sale Of
        </span>
        <span className="text-lg md:text-xl font-bold">$29.99</span>
      </div>

      {/* Main Product Image */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full -z-10 animate-pulse"></div>

        {/* Bag Image - Using a placeholder that fits the aesthetic */}
        <img
          src="https://themewagon.github.io/malefashion/img/product-sale.png"
          alt="Multi-pocket Chest Bag"
          className="w-full h-full object-contain drop-shadow-2xl hover:rotate-3 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default ProductImage;
