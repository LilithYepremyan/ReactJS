import { useDispatch, useSelector } from "react-redux";
import style from "./PillsCard.module.css";
import RatingStars from "../RatingStars/RatingStars";
import { findPill } from "./PillsCard.slice";

const PillCard = () => {
  const pills = useSelector((state) => state.pills);
  const dispatch = useDispatch();
  console.log(pills);

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
                <RatingStars />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PillCard;
