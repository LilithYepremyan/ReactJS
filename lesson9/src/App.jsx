import { useReducer, useState } from "react";
import "./App.css";
import { UserContext, initialState, reducer } from "./UserContext";
import UserList from "./UserList";

function App() {
  // const [users, setUsers] = useState([
  //   { id: 101, name: "Ashot", salary: 800000 },
  //   { id: 102, name: "Hayk", salary: 400000 },
  //   { id: 103, name: "Mark", salary: 500000 },
  // ]);

  // const onDelete = (id) => {
  //   setUsers(users.filter((el) => el.id !== id));
  // };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <UserList />
      </UserContext.Provider>
    </>
  );
}

export default App;
