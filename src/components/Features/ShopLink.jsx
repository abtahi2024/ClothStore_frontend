import React from "react";
import { Link } from "react-router";

const ShopLink = ({ label }) => {
  return (
    <div className="group inline-block mt-4 cursor-pointer">
      <Link to="/products"
        className="text-[10px] font-black tracking-[0.25em] uppercase text-black"
      >
        {label}
      </Link>
      <div className="h-[2px] w-10 bg-[#e63946] mt-1 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

export default ShopLink;
