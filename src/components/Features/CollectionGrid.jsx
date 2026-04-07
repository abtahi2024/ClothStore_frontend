import React from "react";
import ShopLink from "./ShopLink";

const CollectionGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Row 1: Clothing Collections 2030 (Top Right Area) */}
        <div className="md:col-start-6 md:col-span-7 flex flex-col md:flex-row items-center md:items-end gap-8 mb-16 md:mb-32">
          <div className="text-left md:mb-12">
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-4">
              Clothing<br />Collections<br />2030
            </h2>
            <ShopLink label="SHOP NOW" />
          </div>
          <div className="w-full h-100 md:h-150 bg-gray-100 overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
              alt="Clothing Collection"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Row 2: Left Side - Accessories */}
        <div className="md:col-start-2 md:col-span-4 flex flex-col items-start -mt-16 md:-mt-32">
          <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden group mb-8">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
              alt="Accessories"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <h3 className="text-3xl font-black tracking-tight">Accessories</h3>
          <ShopLink label="SHOP NOW" />
        </div>
        
        {/* Item 3: Shoes Spring 2030 (Bottom Right) */}
        <div className="md:col-start-7 md:col-span-5 flex flex-col md:flex-row items-center gap-8 md:mt-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Shoes
              <br />
              Spring 2030
            </h3>
            <ShopLink label="SHOP NOW" />
          </div>
          <div className="w-full md:w-[320px] aspect-square overflow-hidden flex items-center justify-center group">
            <img
              src="https://themewagon.github.io/malefashion/img/banner/banner-3.jpg"
              alt="Shoes"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
