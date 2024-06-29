import { useContext } from "react";
import { ActionTypes, ITodo } from "../lib/types";
import { ToDoContext } from "../lib/context";

interface Props {
  todo: ITodo;
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {
  const context = useContext(ToDoContext);
  const { dispatch } = context;

  const updateToDo = () => {
    dispatch({ type: ActionTypes.update, payload: todo.id });
  };

  const deleteToDo = () => {
    dispatch({ type: ActionTypes.remove, payload: todo.id });
  };

  return (
    <div className={!todo.completed ? "item" : "item completed"}>
      <p>{todo.text}</p>
      <div>
        <button onClick={updateToDo}>done</button>
        <button onClick={deleteToDo}>delete</button>
      </div>
    </div>
  );
};
