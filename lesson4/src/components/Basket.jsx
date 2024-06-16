import { useState } from "react";
import { BasketItem } from "./BasketItem";

export const Basket = ({
  id,
  items,
  onAdd,
  onSubtract,
  onRemove,
  onSale,
  isSaled,
}) => {
    return (
    <div>
      <h3>Basket</h3>
      {!isSaled && <button onClick={onSale}>Sale</button>}
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
          {items.map((elm) => (
            <BasketItem
              key={elm.id}
              {...elm}
              onAdd={onAdd}
              onSubtract={onSubtract}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
