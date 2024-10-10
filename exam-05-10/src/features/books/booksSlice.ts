import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IBook, IComment, IState } from "./book.type"
import axios from "axios"

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

export const updateBookRatingAndComment = createAsyncThunk(
  "books/addCommentToBook",
  async ({ id, comment, rate, email }: IComment) => {
    const bookResponse = await axios.get(`http://localhost:3004/books/${id}`)
    const book = bookResponse.data

    const newComment: IComment = {
      id,
      email,
      comment,
      rate,
    }

    const updatedComments = [...book.comments, newComment]

    const totalRating = updatedComments.reduce(
      (acc: number, comment: IComment) => acc + comment.rate,
      0,
    )
    const averageRating = updatedComments.length
      ? totalRating / updatedComments.length
      : 0

    const response = await axios.patch(`http://localhost:3004/books/${id}`, {
      comments: updatedComments,
      totalRating: averageRating,
    })

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

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload)
    })

    builder.addCase(updateBookRatingAndComment.fulfilled, (state, action) => {
      let book = state.books.find(book => book.id === action.payload.id)

      console.log(book, "book");
      

      if (book) {
        book.comments = action.payload.comments

        const totalRating = book.comments?.reduce(
          (acc, comment) => acc + comment.rate,
          0,
        )

        const averageRating = book.comments?.length
          ? totalRating / book.comments.length
          : 0

        book.totalRating = averageRating
      }
    })
  },
})

export const booksReducer = booksSlice.reducer
