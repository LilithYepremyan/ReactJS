import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import styles from "./AddTask.module.css"
import { addTask } from "./addTaskSlice"
import { useNavigate } from "react-router-dom"

const AddTask = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("pending")

  const handleAddTask = () => {
    dispatch(addTask({ text, date, status: "pending" })).unwrap()
    navigate("/")
  }

  const handleCreatedDate = () => {
    const newDate = Date.now()
    const year = newDate.getFullYear()
    const month = newDate.getMonth()
    const day = newDate.getDate()
    setDate(`${day}/${month}/${year}`)
  }

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleCreatedDate} className={styles.formBlock}>
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
