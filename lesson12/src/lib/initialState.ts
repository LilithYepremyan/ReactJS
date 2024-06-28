import { FilterTypes, type IState } from "./types";

export const initialState: IState = {
  todos: [],
  currentFilter: FilterTypes.all,
};
