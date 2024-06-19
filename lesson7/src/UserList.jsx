import React from "react";

export const UserList = ({ users }) => {
  return (
    <div>
      <h3>UserList</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elm) => (
            <tr key={elm.id}>
              <td>{elm.id}</td>
              <td>{elm.name}</td>
              <td>{elm.salary}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
