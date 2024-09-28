import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useParams } from "react-router-dom"

import styles from "./EditTask.module.css"
import { editTask } from "./editTaskSlice"

const EditTask = () => {
  const { id } = useParams()
  console.log(id)
  const { tasks } = useAppSelector(state => state.tasks)
  console.log(tasks, "edited    tasks")
  const dispatch = useAppDispatch()

  const found = tasks.find(task => task.id === Number(id))
  console.log(found, "found")

  const handleSave = () => {
    dispatch(editTask())
  }

  return (
    <div className={styles.editBlock}>
      <h1>Edit Task</h1>
      <input type="text" defaultValue={found?.text} />
      <select defaultValue={found?.status}>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button
        onClick={() => {
          handleSave()
        }}
      >
        Save
      </button>
    </div>
  )
}

export default EditTask
