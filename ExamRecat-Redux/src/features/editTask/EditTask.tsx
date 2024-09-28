import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useNavigate, useParams } from "react-router-dom"

import styles from "./EditTask.module.css"
import { editTask } from "./editTaskSlice"
import { useState } from "react"

const EditTask = () => {
  const { id } = useParams()
  const { tasks } = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const found = tasks.find(task => task.id === Number(id))

  const [text, setText] = useState(found?.text || "")
  const [status, setStatus] = useState(found?.status || "pending")
  const [date, setDate] = useState(found?.date || "")

  const handleSave = () => {
    dispatch(editTask({ id: Number(id), text, status, date }))
    navigate("/")
  }

  return (
    <div>
      <h1>Edit Task</h1>
      <form action="" className={styles.editBlock} onSubmit={handleSave}>
        <input
          type="text"
          defaultValue={found?.text}
          onChange={e => setText(e.target.value)}
        />
        <select
          defaultValue={found?.status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  )
}

export default EditTask
