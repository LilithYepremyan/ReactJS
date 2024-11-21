import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import pizzaReducer from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    pizzaReducer,
  },
});
