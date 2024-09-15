import { useState } from "react"
import type { InputUser } from "../features/users/types"
import { useAddUserMutation } from "../features/users/users.api"
import styles from "./add-user.module.css"

const AddUser = () => {
  const [user, setUser] = useState<InputUser>({ name: "", salary: 0 })
  const [addUser, result] = useAddUserMutation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addUser(user).then(res => {
      setUser({ name: "", salary: 0 })
    })
  }

  return (
    <div className={styles.container}>
    <h3 className={styles.heading}>Add User</h3>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Please enter name"
        value={user.name}
        onChange={(event) => setUser({ ...user, name: event.target.value })}
      />
      <input
        className={styles.input}
        type="number"
        placeholder="Please enter salary"
        step={20000}
        value={user.salary}
        onChange={(event) => setUser({ ...user, salary: +event.target.value })}
      />
      <button className={styles.button}>Save</button>
    </form>
  </div>
  )
}

export default AddUser
