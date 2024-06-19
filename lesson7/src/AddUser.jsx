// import React, { useRef } from "react";

// export const AddUser = ({ onAdd }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd({ name: name.current.value, salary: salary.current.value });
//     name.current.value = "";
//     salary.current.value = "";
//   };

//   const name = useRef();
//   const salary = useRef();

//   return (
//     <>
//       <h3>Add User</h3>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="">First name</label>
//         <input type="text" ref={name} />
//         <label htmlFor="">Salary</label>
//         <input type="text" ref={salary} />
//         <button>Save</button>
//       </form>
//     </>
//   );
// };

import React, { useState } from "react";

export const AddUser = ({ onAdd }) => {
  const [user, setUser] = useState({ name: "", salary: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name.trim()) {
      return setError("Please fill the field");
    }

    onAdd(user);
    setUser({ name: "", salary: "" });
    setError("");
  };

  return (
    <>
      <h3>Add User</h3>
      <form action="" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="">First name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="">Salary</label>
        <input
          type="number"
          value={user.salary}
          onChange={(e) => setUser({ ...user, salary: e.target.value })}
        />
        <button>Save</button>
      </form>
    </>
  );
};
