import { ITodo } from "../lib/types";

interface Props {
  todo: ITodo;
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="item">
      <p>{todo.text}</p>
      <div>
        <button>done</button>
        <button>delete</button>
      </div>
    </div>
  );
};
