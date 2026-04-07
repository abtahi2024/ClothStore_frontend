import { Star } from "lucide-react";
import React from "react";

const StarRating = ({rating,count}) => {
  return (
    <div>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating
                ? "fill-brand-accent text-brand-accent"
                : "text-gray-300"
            }
          />
        ))}
        {count !== undefined && (
          <span className="text-xs text-brand-secondary ml-2">
            ({count} Reviews)
          </span>
        )}
      </div>
    </div>
  );
};

export default StarRating;
