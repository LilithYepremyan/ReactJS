export interface IBook {
  id: string
  title: string
  author: string
  photo: string
  totalRating: number
  comments?: IComment[]
}

export interface IState {
  books: IBook[]
}

export interface IComment {
  id: number
  comment: string
  rate: number
  email: string
}
