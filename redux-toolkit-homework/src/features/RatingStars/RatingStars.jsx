import { useState } from "react";
import RatingStarIcon from "../ratingStarIcon/RatingStarIcon";
import style from "./RatingStars.module.css";

// eslint-disable-next-line react/prop-types
const RatingStars = ({ totalStars = 5 }) => {
  const [hoveredStars, setHoveredStars] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredStars(index + 1);

    console.log("hover ", index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
    console.log("leave");
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className={style.ratingStars}>
      {[...Array(totalStars)].map((el, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <RatingStarIcon isFill={false} />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
