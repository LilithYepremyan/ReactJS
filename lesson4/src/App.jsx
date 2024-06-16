import { useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";

function App() {
  const [products, setProducts] = useState([
    {
      id: 101,
      title: "Psychology",
      price: 30,
      photo:
        "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg",
    },
    {
      id: 102,
      title: "Phisics",
      price: 12,
      photo: "https://images.booksense.com/images/551/458/9781465458551.jpg",
    },
    {
      id: 103,
      title: "Poetry",
      price: 20,
      photo:
        "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg",
    },
    {
      id: 104,
      title: "Biology",
      price: 25,
      photo: "https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg",
    },
    {
      id: 105,
      title: "Religions",
      price: 34,
      photo: "https://images.booksense.com/images/433/408/9781465408433.jpg",
    },
    {
      id: 106,
      title: "Poetry Part2",
      price: 40,
      photo:
        "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg",
    },
    {
      id: 107,
      title: "Biology Part2",
      price: 50,
      photo: "https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg",
    },
    {
      id: 108,
      title: "Religions Part2Ֆ",
      price: 40,
      photo: "https://images.booksense.com/images/433/408/9781465408433.jpg",
    },
  ]);
  const [isSaled, setIsSaled] = useState(false);
  const [basket, setBasket] = useState([]);

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

  const saleBook = () => {
    setBasket(
      basket.map((elm) => {
        if (elm.count > 3) {
          return {
            ...elm,
            subtotal: elm.price * (elm.count - 1),
          };
        }
        return elm;
      })
    );
    setIsSaled(true);
  };

  return (
    <>
      <div className="row">
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          onAdd={addBook}
          onSubtract={subtractBook}
          onRemove={removeBook}
          onSale={saleBook}
          isSaled= {isSaled}
        />
      </div>
    </>
  );
}

export default App;
