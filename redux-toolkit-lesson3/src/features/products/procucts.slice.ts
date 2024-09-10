import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit"
import type { IProduct, IRate, IState } from "./types"
import { getDummyProducts } from "./products.api"

const initialState: IState = {
  items: [],
}

export const getProducts = createAsyncThunk("products/get", async () => {
  return await getDummyProducts()
})
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateRate: (state, action: PayloadAction<IRate>) => {
      let product = state.items.find(prod => prod.id === action.payload.id)
      if (product) {
        product.rate = action.payload.rate
      }
    },
    copyItem: (state, action: PayloadAction<IProduct>) => {
      state.items.push({ ...action.payload, id: Date.now() })
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log(action)
      state.items = action.payload
    })
  },
})

export const reducer = ProductSlice.reducer
export const { updateRate, copyItem } = ProductSlice.actions
