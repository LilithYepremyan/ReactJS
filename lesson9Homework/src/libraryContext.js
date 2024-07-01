import React from "react";

export const LibraryContext = React.createContext();

export const initialState = {
  products: [],
  basket: [],
};

export const reducer = (state, action) => {
  const product = state.products.find((item) => item.id === action.payload);
  const inBasket = state.basket.find((item) => item.id === action.payload);

  switch (action.type) {
    case "move":
      return {
        ...state,
        basket: inBasket
          ? state.basket.map((item) =>
              item.id === action.payload
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.basket, { ...product, count: 1 }],
      };
    case "add": {
      const product = state.products.find((item) => item.id === action.payload);

      if (!product) {
        console.error(`Product with id ${action.payload} not found`);
        return state;
      }

      const inBasket = state.basket.find((item) => item.id === action.payload);

      const updatedBasket = inBasket
        ? state.basket.map((item) =>
            item.id === action.payload
              ? { ...item, count: item.count + 1 }
              : item
          )
        : [...state.basket, { ...product, count: 1 }];

      const newTotal = updatedBasket.reduce(
        (acc, item) => acc + item.count * item.price,
        0
      );

      return {
        ...state,
        basket: updatedBasket,
        total: newTotal,
      };
    }
    case "subtract": {
      return {
        ...state,
        basket: state.basket.map((elm) =>
          elm.id === action.payload && elm.count > 1
            ? { ...elm, count: elm.count - 1 }
            : elm
        ),
      };
    }
    case "onRemove": {
      console.log(action.payload);
      return {
        ...state,
        basket: state.basket.filter((elm) => elm.id != action.payload),
      };
    }
    case "setProduct": {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
