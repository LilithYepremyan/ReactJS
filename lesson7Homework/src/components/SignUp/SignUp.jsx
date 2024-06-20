import React, { useState } from "react";
import "./SignUp.css";

export const SignUp = ({ signUp, users }) => {
  const [user, setUser] = useState({
    name: "",
    surName: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleOnSubmit = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{6,}$/;
    e.preventDefault();
    if (
      !user.name.trim() ||
      !user.surName.trim() ||
      !user.login.trim() ||
      !user.password.trim()
    ) {
      return setError("Please fill the field");
    }
    if (!emailRegex.test(user.login)) {
      return setError("Please enter a valid email address");
    }
    if (!passwordRegex.test(user.password)) {
      return setError("Password must be a little longer");
    }

    const userExists = users.some((el) => el.login == user.login);

    if (!userExists) {
      setSuccess("Success");
      signUp(user);
    } else {
       return setError("This email already exist");
    }

    console.log(users, "users");
    setUser({ id: "", name: "", surName: "", login: "", password: "" });
    setError("");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form className="formWrapper" action="" onSubmit={handleOnSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="">Surname</label>
        <input
          type="text"
          value={user.surName}
          onChange={(e) => setUser({ ...user, surName: e.target.value })}
        />
        <label htmlFor="">Login</label>
        <input
          type="text"
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
