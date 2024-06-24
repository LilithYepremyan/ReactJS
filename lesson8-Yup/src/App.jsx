import { useEffect, useState } from "react";
import "./App.css";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3004/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const addItem = (obj) => {
    setUsers([...users, obj]);
    toast.success("New User has been added successfully");
  };

  const deleteItem = (id) => {
    axios.delete("http://localhost:3004/users/" + id);

    setUsers(users.filter((el) => el.id !== id));
    toast.success("User has been deleted successfully");
  };

  const salaryUp = (id) => {
    let found = users.find((el) => el.id == id);

    axios
      .patch("http://localhost:3004/users/" + id, {
        salary: found.salary + 50000,
      })
      .then((res) => {
        setUsers(
          users.map((user) =>
            user.id == id ? { ...user, salary: res.data.salary } : user
          )
        );
      });
    toast.success("Salary increased by 50000");
  };

  return (
    <div className="row">
      <ToastContainer />
      <AddUser onAdd={addItem} />
      <UserList users={users} onDelete={deleteItem} onSalaryUp={salaryUp} />
    </div>
  );
}
export default App;
