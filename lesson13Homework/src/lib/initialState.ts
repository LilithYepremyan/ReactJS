import { FilterTypes, IState } from "./types";

export const initialState: IState = {
  events: [],
  currentFilter: FilterTypes.all,
};
