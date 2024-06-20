import { useState } from "react";
import "./App.css";
import { SignUp } from "./components/SignUp/SignUp";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ann",
      surname: "Hakobyan",
      login: "ann.hakobyan@gmail.com",
      password: "Q1w2e3r4?",
    },
    {
      id: 2,
      name: "Adam",
      surname: "Hakobyan",
      login: "adam.hakobyan@gmail.com",
      password: "Q1w2e3r4??",
    },
    {
      id: 3,
      name: "Mark",
      surname: "Adamyan",
      login: "mark.adamyan@gmail.com",
      password: "Q1w2e3r4???",
    },
    {
      id: 4,
      name: "Ani",
      surname: "Sargsyan",
      login: "ani.sargsyan@gmail.com",
      password: "Q1w2e3r4",
    },
    {
      id: 5,
      name: "Mika",
      surname: "Ananyan",
      login: "mika.ananyan@gmail.com",
      password: "Q1w2e3r4t5",
    },
  ]);

  const signUp = (obj) => {
    setUsers([...users, { ...obj, id: users.length + 1 }]);
  };

  console.log("current users", users);

  return (
    <>
      <SignUp signUp={signUp} users={users} />
    </>
  );
}

export default App;
