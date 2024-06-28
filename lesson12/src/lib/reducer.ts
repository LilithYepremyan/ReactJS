import { type IState, type IAction, ActionTypes, ITodo } from "./types";
export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.put:
      return {
        ...state,
        todos: action.payload as ITodo[],
      };
    case ActionTypes.add:
      return {
        ...state,
        todos: [...state.todos, action.payload as ITodo],
      };
    default:
      return state;
  }
};
