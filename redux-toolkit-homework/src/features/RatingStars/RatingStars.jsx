import { useState } from "react";
import RatingStarIcon from "../ratingStarIcon/RatingStarIcon";
import style from "./RatingStars.module.css";

// eslint-disable-next-line react/prop-types
const RatingStars = ({ totalStars = 5, rating, onRatingChange }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const handleMouseEnter = (index) => {
    setHoveredStars(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = (index) => {
    const newRating = index + 1;
    setCurrentRating(newRating);
    onRatingChange(newRating);
  };

  const starsToShow = hoveredStars || currentRating;

  return (
    <div className={style.ratingStars}>
      {[...Array(totalStars)].map((el, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <RatingStarIcon isFill={index < starsToShow} />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
