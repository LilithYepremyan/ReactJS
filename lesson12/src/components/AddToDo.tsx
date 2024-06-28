import { useContext, useState } from "react";
import { addToDo } from "../lib/api";
import { ActionTypes } from "../lib/types";
import { ToDoContext } from "../lib/context";

export const AddToDo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string>("");
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("Out of provider...");
  }
  const { dispatch } = context;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text.trim()) {
      return setError("Please fill the field");
    }
    setError("");

    const data = await addToDo({ text, completed: false });
    setText("");
    dispatch({ type: ActionTypes.add, payload: data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
};
