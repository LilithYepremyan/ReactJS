import { Dispatch } from "react";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export enum FilterTypes {
  all,
  active,
  completed,
}

export interface IState {
  todos: ITodo[];
  currentFilter: FilterTypes;
}

export enum ActionTypes {
  add,
  remove,
  update,
  put,
}

export interface IAction {
  type: ActionTypes;
  payload: unknown;
}

export interface IContextType {
  state: IState;
  dispatch: Dispatch<IAction>;
}
