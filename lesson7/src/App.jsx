import { useState } from "react";
import "./App.css";
import { UserList } from "./UserList";
import { AddUser } from "./AddUser";

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: "Tigran", salary: 200000 },
    { id: 102, name: "Ashot", salary: 900000 },
    { id: 103, name: "Hayk", salary: 300000 },
  ]);

  const addUser = (obj) => {
    setUsers([...users, { ...obj, id: Date.now() }]);
  };

  return (
    <>
      <UserList users={users} />
      <AddUser onAdd={addUser} />
    </>
  );
}

export default App;
