import { useContext } from "react";
import { ProductItem } from "./ProductItem";
import { LibraryContext } from "../libraryContext";

export const ProductList = () => {
  const {
    state: { products },
  } = useContext(LibraryContext);

  return (
    <div>
      <h3>Product List</h3>
      <div className="list">
        {products.map((elm) => (
          <ProductItem key={elm.id} {...elm} />
        ))}
      </div>
    </div>
  );
};
