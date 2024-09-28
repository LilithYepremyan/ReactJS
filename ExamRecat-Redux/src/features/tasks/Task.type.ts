export interface ITask {
  id: number
  text: string
  status: string
  date: string
}

export interface IState {
  tasks: ITask[]
}
