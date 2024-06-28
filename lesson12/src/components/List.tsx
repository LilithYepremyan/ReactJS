import { useContext } from "react";
import { ToDoContext } from "../lib/context";
import { ToDoItem } from "./ToDoItem";

export const List: React.FC = () => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error("Outside of a provider...");
  }

  const { state } = context;

  console.log(state.todos);

  return (
    <div className="list">
      {state.todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  );
};
