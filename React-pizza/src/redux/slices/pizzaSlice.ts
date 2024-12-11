import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const BASE_URL = "https://670f9c043e7151861658a5ed.mockapi.io/items";

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [] as Pizza[],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({
    order,
    sortBy,
    category,
    search,
    currentPage,
  }: SearchPizzaParams) => {
    const { data } = await axios.get<Pizza[]>(
      `${BASE_URL}?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}${search}&order=${order}`
    );

    return data as Pizza[];
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
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
