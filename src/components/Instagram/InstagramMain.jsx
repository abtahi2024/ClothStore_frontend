import React from "react";
import InstagramGrid from "./InstagramGrid";
import { BsInstagram, BsPinterest, BsTwitterX } from "react-icons/bs";

const posts = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800",
    alt: "Desk accessories",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800",
    alt: "Folded jeans and shirt",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800",
    alt: "Minimalist living room",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    alt: "Clothing rack",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
    alt: "Canvas travel bag",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    alt: "Wicker chair",
  },
];
const InstagramMain = () => {
  return (
    <div className="min-h-96 bg-white flex items-center justify-center p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Section: Image Grid */}
        <div className="w-full md:w-2/3 lg:w-[60%] shadow-2xl rounded-sm overflow-hidden border border-gray-100">
          <InstagramGrid posts={posts} />
        </div>
        {/* Right Section: Text Content */}
        <div className="w-full md:w-1/3 lg:w-[40%] flex flex-col justify-center text-left space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Instagram
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-red-600 text-3xl md:text-4xl font-semibold hover:text-red-700 cursor-pointer transition-colors duration-300">
              #Male_Fashion
            </span>
          </div>

          {/* Additional Call to Action (UX enhancement) */}
          <div className="pt-6 border-t border-gray-100 flex items-center space-x-6">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Explore Collection
            </button>
            <div className="flex space-x-4 text-gray-400">
              <BsInstagram className="hover:text-gray-900 cursor-pointer transition-colors text-xl" />
              <BsPinterest className="hover:text-gray-900 cursor-pointer transition-colors text-xl" />
              <BsTwitterX className="hover:text-gray-900 cursor-pointer transition-colors text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramMain;
