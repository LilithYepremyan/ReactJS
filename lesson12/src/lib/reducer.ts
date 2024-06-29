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
    case ActionTypes.update:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ActionTypes.remove:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
