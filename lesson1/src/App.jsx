import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([
    { id: 1, name: "Adam", salary: 200000 },
    { id: 2, name: "Mark", salary: 200000 },
    { id: 3, name: "Ani", salary: 200000 },
    { id: 4, name: "Eva", salary: 200000 },
  ]);

  const salaryUpper = (id) => {
    setUsers(
      users.map((elm) =>
        elm.id == id ? { ...elm, salary: elm.salary + 50000 } : elm
      )
    );
  };

  const salaryDown = (id) => {
    setUsers(
      users.map((elm) =>
        elm.id == id
          ? {
              ...elm,
              salary:
                elm.salary - 50000 >= 50000 ? elm.salary - 50000 : elm.salary,
            }
          : elm
      )
    );
  };

  const remove = (id) => {
    setUsers(users.filter((elm) => elm.id !== id));
  };

  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {users.map((elm) => (
          <tr key={elm.id}>
            <td>{elm.id}</td>
            <td>{elm.name}</td>
            <td>{elm.salary}</td>
            <td>
              <button onClick={() => salaryUpper(elm.id)}>Up salary</button>
              <button onClick={() => salaryDown(elm.id)}>Salary down</button>
              <button onClick={() => remove(elm.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
