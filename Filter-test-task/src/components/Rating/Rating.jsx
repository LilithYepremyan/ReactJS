import styles from "./Rating.module.css";
import StarIcon from "../StarIcon/StarIcon";
import React from "react";

const getRatingArray = (rating) => {
  if (rating >= 5) return new Array(5).fill(1);
  if (rating < 0) return new Array(5).fill(0);
  const filledStars = Math.floor(rating);
  const lastStarWidth = rating - filledStars;
  const arr = new Array(filledStars).fill(1);
  arr.push(lastStarWidth);
  return arr.concat(new Array(5 - arr.length).fill(0));
};

const Rating = ({ width = 24, height = 24, rating = 0 }) => {
  const ratingArr = getRatingArray(rating);

  return (
    <div className={styles.ratingCircleContainer}>
      {ratingArr.map((elem, index) => (
        <span  key={index} className={styles.ratingCircle}>
          <StarIcon
            width={width}
            height={height}
            fillPercentage={elem}
            borderColor="red"
          />
        </span>
      ))}
    </div>
  );
};
export default Rating;
