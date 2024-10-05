import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { IBook, IState } from "./book.type"
import axios from "axios"
import type { IRate } from "../rating/Rating.types"

const initialState: IState = {
  books: [],
}

export const getAllBooks = createAsyncThunk("books/getAllBooks", async () => {
  const response = await axios.get("http://localhost:3004/books")
  return response.data
})

export const addBook = createAsyncThunk(
  "books/addBook",
  async (book: IBook) => {
    const response = await axios.post("http://localhost:3004/books", book)
    return response.data
  },
)



export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    updateRate: (state, action: PayloadAction<IRate>) => {
      let product = state.books.find(prod => prod.id === action.payload.id)
      if (product) {
        product.rating = action.payload.rate
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.books = action.payload
    })

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload)
    })
  },
})

export const booksReducer = booksSlice.reducer

export const { updateRate } = booksSlice.actions
