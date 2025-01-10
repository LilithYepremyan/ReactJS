export type IBook = {
  id: number
  title: string
  author: string
  authorInfo: string
  photo: string
  rating: number
  bookInfo: string
  price: number
  genres: string[]
}

export type IBooksState = {
  books: IBook[]
  error: string | null | undefined
}
