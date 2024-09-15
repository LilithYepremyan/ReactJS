import React, { useState } from "react"
import { InputUser } from "../features/users/types"
import { useAddUserMutation } from "../features/users/users.api"

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
    <>
      <h3>Add User</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter name"
          value={user.name}
          onChange={event => setUser({ ...user, name: event.target.value })}
        />
        <input
          type="number"
          placeholder="Please enter salary"
          step={20000}
          onChange={event => setUser({ ...user, salary: +event.target.value })}
        />
        <button>Save</button>
      </form>
    </>
  )
}

export default AddUser
