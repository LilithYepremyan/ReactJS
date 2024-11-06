import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./components/Main/Main.slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
