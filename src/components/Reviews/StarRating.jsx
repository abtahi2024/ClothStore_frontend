import { Star } from "lucide-react";
import React from "react";

const StarRating = ({ onChange, rating }) => {
  return (
    <div className={`flex items-center gap-0.5`}>
      {[...Array(5)].map((_, star) => {
        const value = star + 1;
        return (
          <div key={value} className="relative">
            <Star
              size={16}
              onClick={() => onChange(value)}
              className={`${value <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
