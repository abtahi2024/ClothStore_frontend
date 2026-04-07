import React from "react";

const Pagination = ({ currentPage, totalPage, handlePageChenge }) => {
  return (
    <div>
      <div className="mt-20 flex justify-center items-center gap-4 text-sm font-medium">
        {Array.from({ length: totalPage }, (_, i) => (
          <button onClick={()=>handlePageChenge(i+1)}
            className={`w-8 h-8 rounded-full ${currentPage === i + 1 ? "border border-black flex items-center justify-center bg-black text-white" : "w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50"}`}
            key={i}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
