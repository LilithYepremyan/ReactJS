export const BasketItem = ({
  id,
  title,
  price,
  subtotal,
  count,
  onAdd,
  onSubtract,
  onRemove,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{subtotal ? subtotal : count * price}</td>
      <td className="actionButtons">
        <button onClick={() => onAdd(id)}>+</button>
        <button onClick={() => onSubtract(id)}>-</button>
        <button onClick={() => onRemove(id)}>x</button>
      </td>
    </tr>
  );
};
