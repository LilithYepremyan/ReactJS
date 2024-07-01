import { useContext } from "react";
import { LibraryContext } from "../libraryContext";

// eslint-disable-next-line react/prop-types
export const BasketItem = ({ id, title, price, subtotal, count }) => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("Out of provider...");
  }

  const { dispatch } = context;

  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{subtotal ? subtotal : count * price}</td>
      <td className="actionButtons">
        <button onClick={() => dispatch({ type: "add", payload: id })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "subtract", payload: id })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "onRemove", payload: id })}>
          x
        </button>
      </td>
    </tr>
  );
};
