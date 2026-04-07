import React from "react";

const Sidebar = () => {
  const categories = [
    { name: "Clothings Hot", active: false },
    { name: "Shoe Collection", active: true },
    { name: "Accessories", active: false },
  ];

  return (
    <div className="bg-white py-24 lg:py-48 pr-12 lg:pr-24 w-full flex flex-col items-end space-y-10 lg:space-y-14">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`text-2xl lg:text-[42px] transition-all duration-300 text-right whitespace-nowrap leading-tight tracking-tight ${
            cat.active
              ? "text-[#111111] font-bold"
              : "text-[#b7b7b7] font-medium opacity-80 hover:text-black transition-colors"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
