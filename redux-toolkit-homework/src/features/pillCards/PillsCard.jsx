import { useDispatch, useSelector } from "react-redux";
import style from "./PillsCard.module.css";
import RatingStars from "../RatingStars/RatingStars";
import { changeRating, findPill } from "./PillsCard.slice";

const PillCard = () => {
  const pills = useSelector((state) => state.pills);
  const dispatch = useDispatch();

  const handleRatingChange = (id, newRating) => {
    dispatch(changeRating({ id: id, rating: newRating }));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Find medicine you want..."
        onChange={(e) => dispatch(findPill(e.target.value))}
      />

      <div className={style.wrapper}>
        {pills.length === 0 ? (
          <p>No pills found</p>
        ) : (
          pills.map((pill) => (
            <div className={style.container} key={pill.id}>
              <img className={style.image} src={pill.image} alt={pill.name} />
              <div>
                <span>{pill.name}</span>
                <RatingStars
                  rating={pill.rating}
                  totalStars={5}
                  onRatingChange={(newRating) =>
                    handleRatingChange(pill.id, newRating)
                  }
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PillCard;
