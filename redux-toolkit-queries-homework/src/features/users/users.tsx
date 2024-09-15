import AddUser from "../../utils/add-user"
import { useDeleteUserMutation, useGetUsersQuery } from "./users.api"
import styles from "./users.module.css"
import { useNavigate } from "react-router-dom"

export const Users = () => {
  const { data, isLoading, error } = useGetUsersQuery(null)

  const [deleteUser, result] = useDeleteUserMutation()

  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    deleteUser(id)
  }

  const handleEdit = (id: string) => {
    navigate(`/users/${id}/edit`)
  }

  return (
    <div className={styles.container}>
      <AddUser />
      {isLoading && <p className={styles.loading}>Loading...</p>}
      <div className={styles.userList}>
        {data &&
          data.map(user => (
            <div className={styles.userCard} key={user.id}>
              <p className={styles.userInfo}>
                {user.name} with {user.salary} AMD salary
              </p>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(user.id)}
              >
                Edit
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
