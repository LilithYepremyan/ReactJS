import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
  rating: number;
};

type CartSliceState = {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
};

const initialState: CartSliceState = {
  totalPrice: 0,
  totalCount: 0,

  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.count * obj.price + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
        state.totalCount = state.totalCount - 1;
        state.totalPrice = state.totalPrice - findItem.price;

        if (findItem.count === 0) {
          state.items = state.items.filter(
            (obj) => obj.id !== action.payload.id
          );
        }
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.count * obj.price + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
