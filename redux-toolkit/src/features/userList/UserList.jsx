import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./userList.module.css";
import { removeUser } from "./userList.slice";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <div>
      <h1>User List</h1>
      <table className={style.table}>
        <thead>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.salary}</td>
              <td>
                <button onClick={() => dispatch(removeUser(el.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
