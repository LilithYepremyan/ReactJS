import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://670f9c043e7151861658a5ed.mockapi.io/items";

const initialState = {
  items: [],
  status: "",
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({ order, sortBy, category, search, currentPage }) => {
    const { data } = await axios.get(
      `${BASE_URL}?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}${search}&order=${order}`
    );

    return data;
  }
);
const pizzaSlice = createSlice({
  name: "pizza",
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
