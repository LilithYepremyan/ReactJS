import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllTasks } from "./tasksSlice"
import styles from "./Tasks.module.css"
import { useNavigate } from "react-router-dom"

const Tasks = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks)
  console.log(tasks, "tasks")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllTasks())
  }, [])

  const handleEdit = (id: any) => {
    navigate(`/edit/${id}`)
  }

  return (
    <div className={styles.container}>
      {tasks.tasks.map(task => (
        <div key={task.id} className={styles.box}>
          <p>{task.text}</p>
          <p>{task.status}</p>
          <p>{task.date}</p>
          <button onClick={() => handleEdit(task.id)}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default Tasks
