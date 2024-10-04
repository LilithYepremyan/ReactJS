import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import styles from "./AddTask.module.css"
import { useNavigate } from "react-router-dom"
import { addTask } from "../tasks/tasksSlice"

const AddTask = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [text, setText] = useState("")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [status, setStatus] = useState("pending")

  const handleAddTask = () => {
    dispatch(
      addTask({
        id:new Date().getTime().toString(),
        text,
        date,
        status: "pending",
      }),
    ).unwrap()
    navigate("/")
  }

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleAddTask} className={styles.formBlock}>
        <input
          value={text}
          className={styles.input}
          type="text"
          placeholder="Title"
          onChange={e => setText(e.target.value)}
        />
        <select
          name=""
          id=""
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="pending">pending</option>
          <option value="completed">completed</option>
          <option value="in progress">in progress</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
