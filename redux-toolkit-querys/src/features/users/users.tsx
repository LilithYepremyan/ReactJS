import { useState } from "react"
import AddUser from "../../utils/add-user"
import { useDeleteUserMutation, useGetUsersQuery } from "./users.api"
import { InputUser } from "./types"

export const Users = () => {
  const { data, isLoading, error } = useGetUsersQuery(null)

  const [deleteUser, result] = useDeleteUserMutation()

  const handleDelete = (id: string) => {
    deleteUser(id)
  }

  return (
    <>
      <h1>Users</h1>
      <AddUser />
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map(user => (
          <div key={user.id}>
            <p>
              {user.name} with {user.salary} AMD salary
            </p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
    </>
  )
}
