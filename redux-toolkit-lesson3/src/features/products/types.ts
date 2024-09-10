export interface IProduct {
  id: number
  price: number
  title: string
  picture: string
  rate: number
}

export interface IState {
  items: IProduct[]
}

export interface IRate {
  id: number
  rate: number
}
