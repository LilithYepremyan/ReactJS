export const ProductItem = ({ title, id, photo, price, onMove }) => {
  return (
    <div>
      <img src={photo} alt="IMG" />
      <p>{title}</p>
      <p>
        <strong>{price} USD</strong>
      </p>
      <button onClick={() => onMove(id)}>Move</button>
    </div>
  );
};
