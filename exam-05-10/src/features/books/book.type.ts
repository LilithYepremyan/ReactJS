export interface IBook {
  id: string
  title: string
  author: string
  photo: string
  rating: number
  comments?: IComment[]
}

export interface IState {
  books: IBook[]
}

export interface IComment {
  id: number
  userId: number
  comment: string
}
