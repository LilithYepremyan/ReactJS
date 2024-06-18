import { BasketItem } from "./BasketItem";

export const Basket = ({ items, total, onAdd, onSubtract, onRemove }) => {
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
