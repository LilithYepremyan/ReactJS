import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      window.scrollTo(0, 0);
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
