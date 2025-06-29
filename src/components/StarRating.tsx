import React from "react";

type StarRatingProps = {
  rating: number; // 0-5, can be half
  reviewCount?: number;
  className?: string;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviewCount,
  className = "",
}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <span
          key={i}
          className="text-yellow-400 material-icons text-base md:text-lg"
        >
          star
        </span>
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <span
          key={i}
          className="text-yellow-400 material-icons text-base md:text-lg"
        >
          star_half
        </span>
      );
    } else {
      stars.push(
        <span
          key={i}
          className="text-gray-300 material-icons text-base md:text-lg"
        >
          star
        </span>
      );
    }
  }
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {stars}
      {typeof reviewCount === "number" && (
        <span className="ml-1 text-xs text-blue-700 font-medium">
          {reviewCount.toLocaleString()} reviews
        </span>
      )}
    </span>
  );
};

export default StarRating;
