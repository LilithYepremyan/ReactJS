import { useContext } from "react";
import { BasketItem } from "./BasketItem";
import { LibraryContext } from "../libraryContext";

// eslint-disable-next-line react/prop-types
export const Basket = ({ total }) => {
  const {
    state: { basket },
  } = useContext(LibraryContext);

  return (
    <div>
      <h2>Basket </h2>
      <h3>Total: {total} USD</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((elm) => (
            <BasketItem key={elm.id} {...elm} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
