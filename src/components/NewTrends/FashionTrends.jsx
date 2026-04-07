import React from "react";
import NewsCard from "./NewsCard";

const newPosts = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=1000",
    date: "16 February 2020",
    title: "What Curling Irons Are The Best Ones",
    alt: "Designer coffee art with luxury logos",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
    date: "21 February 2020",
    title: "Eternity Bands Do Last Forever",
    alt: "Fashionable male model in orange background",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1000",
    date: "28 February 2020",
    title: "The Health Benefits Of Sunglasses",
    alt: "Outdoor camping setting with tea kettle",
  },
];

const FashionTrends = () => {
  return (
    <div className="min-h-96 bg-white py-24 px-6 md:px-12">
      {/* Centered Header Section from Image */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h5 className="text-red-600 font-bold text-[13px] tracking-[0.2em] uppercase mb-3">
          LATEST NEWS
        </h5>
        <h1 className="text-4xl md:text-[42px] font-bold text-gray-900 leading-tight">
          Fashion New Trends
        </h1>
      </div>

      {/* Grid matching the 3-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
        {newPosts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FashionTrends;
