import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import type { IBooksState } from "./types"

const initialState: IBooksState = {
  books: [],
  error: null,
}

export const getAllBooks = createAsyncThunk("books/getAllBooks", async () => {
  const response = await axios.get("http://localhost:3001/books")
  return response.data
})

export const addBook = createAsyncThunk("books/addBook", async (book: any) => {
  const response = await axios.post("http://localhost:3001/books", book)
  return response.data
})

export const editBook = createAsyncThunk(
  "books/editBook",
  async (book: any) => {
    const response = await axios.put(
      `http://localhost:3001/books/${book.id}`,
      book,
    )
    return response.data
  },
)

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id: number) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    return response.data
  },
)

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.books = action.payload
    })
    builder.addCase(getAllBooks.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(getAllBooks.pending, state => {
      state.error = null
    })
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload)
    })
    builder.addCase(addBook.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(addBook.pending, state => {
      state.error = null
    })
    builder.addCase(editBook.fulfilled, (state, action) => {
      state.books = state.books.map(book => {
        if (book.id === action.payload.id) {
          return action.payload
        }
        return book
      })
    })
    builder.addCase(editBook.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(editBook.pending, state => {
      state.error = null
    })
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload.id)
    })
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(deleteBook.pending, state => {
      state.error = null
    })
  },
})

export default booksSlice.reducer
