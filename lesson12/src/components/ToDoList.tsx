import { AddToDo } from "./AddToDo";
import { List } from "./List";

export const ToDoList: React.FC = () => {
  return (
    <div className="todo-list">
      <AddToDo />
      <List />
    </div>
  );
};
