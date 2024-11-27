import { useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

interface IPizzaProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

const PizzaCard = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}: IPizzaProps) => {
  const dispatch = useDispatch();
  const typeNames = ["тонкое", "традиционное"];
  const cartItem = useSelector(
    (state) => state.cartReducer.items.find((obj) => obj.id === id)?.count
  );

  console.log({ id, title, price, imageUrl, sizes, types }, "cartItem");

  const addedCount = cartItem ? cartItem : 0;

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onClickAddPizza = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    };
    dispatch(addItem(item));


    console.log({
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    } ,"onclickitem");
    
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={title} />
      <h4 className="pizza-block__title">{title}</h4>
      <h1>{id}</h1>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
              key={type}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active" : ""}
              key={size}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          onClick={onClickAddPizza}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
