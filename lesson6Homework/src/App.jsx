import { useEffect, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    setTotal(basket.reduce((acc, el) => acc + el.count * el.price, 0));
  }, [basket]);

  const moveToCart = (id) => {
    let found = products.find((elm) => elm.id === id);
    let bookInBasket = basket.find((elm) => elm.id === id);
    if (!bookInBasket) {
      setBasket([...basket, { ...found, count: 1 }]);
    } else {
      setBasket(
        basket.map((elm) =>
          elm.id === id ? { ...elm, count: elm.count + 1 } : elm
        )
      );
    }
  };
  const addBook = (id) => {
    setBasket(
      basket.map((elm) =>
        elm.id === id ? { ...elm, count: elm.count + 1 } : elm
      )
    );
  };

  const subtractBook = (id) => {
    setBasket(
      basket.map((elm) =>
        elm.id === id && elm.count > 1 ? { ...elm, count: elm.count - 1 } : elm
      )
    );
  };
  const removeBook = (id) => {
    setBasket(basket.filter((elm) => elm.id !== id));
  };

  return (
    <>
      <div className="row">
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          total={total}
          onAdd={addBook}
          onSubtract={subtractBook}
          onRemove={removeBook}
        />
      </div>
    </>
  );
}

export default App;
