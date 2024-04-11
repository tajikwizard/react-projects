import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numberOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <>
      <div className="star-rating flex justify-center items-center mt-12">
        {[...Array(numberOfStars)].map((_, index) => {
          const starIndex = index + 1;
          return (
            <FaStar
              key={starIndex}
              className={
                starIndex <= (hover || rating)
                  ? "text-yellow-300"
                  : "text-yellow-100"
              }
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          );
        })}
      </div>
      <h3 className="text-xl text-center mt-4">You rated: {rating}</h3>
    </>
  );
};

export default StarRating;
