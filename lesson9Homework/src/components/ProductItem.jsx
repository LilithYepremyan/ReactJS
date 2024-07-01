
import { useContext } from "react";
import { LibraryContext } from "../libraryContext";

// eslint-disable-next-line react/prop-types
export const ProductItem = ({ title, id, photo, price }) => {

  const { dispatch } = useContext(LibraryContext);
  return (
    <div>
      <img src={photo} alt="IMG" />
      <p>{title}</p>
      <p>
        <strong>{price} USD</strong>
      </p>
      <button
        onClick={() => {
          dispatch({ type: "move", payload: id });
        }}
      >
        Move
      </button>
    </div>
  );
};
