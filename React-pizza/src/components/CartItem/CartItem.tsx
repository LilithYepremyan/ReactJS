import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import classNames from "classnames";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";

import type { CartItem } from "../../redux/slices/cartSlice";
import StarIcon from "../StarIcon/StarIcon";

const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  count,
  type,
  rating,
}: CartItem) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };

  const onClickMinus = () => {
    if (count === 1) return;
    dispatch(minusItem({ id } as CartItem));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар из корзины?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.cart__item} data-testid="cart-block">
      <div className={styles.cart__item}>
        <div className={styles.cart__item_img}>
          <img
            className={styles.pizza_block__image}
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className={styles.cart__item_info}>
          <h3>{title}</h3>
          <p>{type}, 26 см.</p>
        </div>
      </div>
      <div className={styles.cart__item_rating}>
        {" "}
        <StarIcon width={25} height={25} fillPercentage={100} />
        <p style={{ color: "#fe5f1e" }}>{rating}</p>
      </div>

      <div className={styles.cart__item_count}>
        <button
          disabled={count === 1}
          className={classNames(
            "button button--outline button--circle button-disabled",
            styles.cart__item_count_minus,
            { [styles.button_disabled]: count === 1 }
          )}
          onClick={onClickMinus}
        >
          -
        </button>
        <div>{count}</div>
        <div
          className={classNames(
            "button button--outline button--circle",
            styles.cart__item_count_minus
          )}
          onClick={onClickPlus}
        >
          +
        </div>
      </div>

      <p>{price * count} </p>
      <div className={styles.cart__item_remove}>
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CartItem;
