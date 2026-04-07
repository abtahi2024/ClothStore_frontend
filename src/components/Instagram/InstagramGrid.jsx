import React from "react";
import { CgInstagram } from "react-icons/cg";

const InstagramGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative aspect-square overflow-hidden group cursor-pointer"
        >
          <img
            src={post.imageUrl}
            alt={post.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <CgInstagram className="text-white text-3xl"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramGrid;
