import StarIcon from "../StarIcon/StarIcon";
import styles from "./Rating.module.scss";

const getRatingArray = (rating: number) => {
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
        <span key={index} className={styles.ratingCircle}>
          <StarIcon
            width={width}
            height={height}
            fillPercentage={elem}
          />
        </span>
      ))}
    </div>
  );
};
export default Rating;
