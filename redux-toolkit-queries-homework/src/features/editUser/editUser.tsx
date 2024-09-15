import { useEffect, useState } from "react"
import styles from "./editUser.module.css"
import type { InputUser } from "../users/types"
import { useEditUserMutation, useGetUsersQuery } from "../users/users.api"
import { useNavigate, useParams } from "react-router-dom"

const EditUser = () => {
  const { id } = useParams()
  const { data: usersData } = useGetUsersQuery(id)
  const [user, setUser] = useState<InputUser>({ name: "", salary: 0 })
  const [editUser] = useEditUserMutation()
  const navigate = useNavigate()

  const found = usersData?.find(el => el.id === id)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    editUser({ id, ...user }).then(res => {})
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Edit User</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Please enter name"
          defaultValue={found?.name}
          onChange={event => setUser({ ...user, name: event.target.value })}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Please enter salary"
          step={20000}
          defaultValue={found?.salary}
          onChange={event => setUser({ ...user, salary: +event.target.value })}
        />
        <button className={styles.button}>Save</button>
      </form>
    </div>
  )
}

export default EditUser
