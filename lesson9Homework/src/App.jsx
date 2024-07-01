import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";
import { LibraryContext, initialState, reducer } from "./libraryContext";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "setProduct", payload: res }));
  }, []);

  useEffect(() => {
    setTotal(state.basket.reduce((acc, el) => acc + el.count * el.price, 0));
  }, [state.basket]);


  return (
    <>
      <div className="row">
        <LibraryContext.Provider value={{ state, dispatch }}>
          <ProductList />
          <Basket total={total} />
        </LibraryContext.Provider>
      </div>
    </>
  );
}

export default App;
