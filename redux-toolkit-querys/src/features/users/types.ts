export interface IUser {
  id: string
  name: string
  salary: number
}

export type InputUser = Omit<IUser, "id">
