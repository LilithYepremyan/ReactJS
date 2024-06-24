import "../styles/AddTask.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required.min(6).max(16),
  description: yup.string().required.min(10).max(100),
  date: yup.date().required(),
  priority: yup.string().required(),
});

const AddTask = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((d) => console.log(d))}
      className="addTask-wrapper"
    >
      <input type="text" className="addTask-title" />
      <textarea className="addTask-description"></textarea>
      <input type="date" className="addTask-date" />
      <select defaultValue={"medium"} className="addTask-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="addTask-submit">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
