import React from "react";
import Sidebar from "./Sidebar";
import ProductImage from "./ProductImage";
import DealContent from "./DealContent";

const Discount = () => {
  return (
    <div className="min-h-125 bg-[#f3f2ee] flex items-center justify-center font-sans overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Category Links */}
        <div className="w-full md:w-[40%] flex justify-start">
          <Sidebar />
        </div>

        {/* Center: Product Image with Sale Badge */}
        <div className="w-full lg:w-[25%] flex justify-center py-10 lg:py-0">
          <ProductImage />
        </div>

        {/* Right Side: Deal of the Week Content */}
        <div className="md:col-span-4 lg:col-span-4 flex items-center justify-center md:justify-end">
          <DealContent />
        </div>
      </div>
    </div>
  );
};

export default Discount;
