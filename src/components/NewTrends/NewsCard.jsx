import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

const NewsCard = ({ post }) => {
  return (
    <div className="flex flex-col items-center group">
      {/* Image with specific aspect ratio and sharp look */}
      <div className="w-full aspect-[1.33/1] overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Floating Overlapping Card */}
      <div className="bg-white w-[85%] -mt-12 p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] z-10 text-left min-h-[180px] flex flex-col justify-between transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] group-hover:-translate-y-1">
        <div>
          <div className="flex items-center space-x-2 text-gray-400 text-[11px] mb-4 font-semibold">
            <SlCalender/>
            <span className="uppercase tracking-wider">{post.date}</span>
          </div>

          <h3 className="text-[#1a1a1a] font-bold text-[18px] leading-[1.4] mb-6">
            {post.title}
          </h3>
        </div>

        {/* Animated Read More Section */}
        <div className="relative inline-flex items-center cursor-pointer overflow-hidden group/btn">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#1a1a1a] uppercase transition-colors duration-300 group-hover/btn:text-red-600">
                READ MORE
              </span>
              <BiChevronRight className="text-2xl text-red-600 transform translate-x-[-10px] opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"/>
            </div>

            {/* Animated Underline */}
            <div className="relative w-full h-[2px] bg-gray-100 mt-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-red-600 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover/btn:translate-x-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
