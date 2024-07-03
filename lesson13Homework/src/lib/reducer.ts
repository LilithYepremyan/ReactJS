import {
  ActionTypes,
  FilterTypes,
  IAction,
  IEvent,
  IState,
  // events,
} from "./types";

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.setEvents:
      return {
        ...state,
        events: action.payload as IEvent[],
      };
    case ActionTypes.setFilter:
      return {
        ...state,
        currentFilter: action.payload as FilterTypes,
      };
    default:
      return state;
  }
};
