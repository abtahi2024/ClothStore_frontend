import React from "react";

const Loader = () => {
  return (
    <div
      className={
        "fixed inset-0 z-50 bg-black w-full h-full min-h-[200px] flex flex-col items-center justify-center"
      }
    >
      <div className="relative flex items-center justify-center">
        {/* The thin purple/pink spinner requested */}
        <div className="w-10 h-10 border-2 border-t-fuchsia-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>

        {/* Soft glow behind the spinner */}
        <div className="absolute w-12 h-12 bg-fuchsia-600/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Loader;
