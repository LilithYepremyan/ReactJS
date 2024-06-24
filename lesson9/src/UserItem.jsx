import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserItem = ({ id, name, salary }) => {
  //   const { onDelete } = useContext(UserContext);
  const { dispatch } = useContext(UserContext);
  return (
    <div>
      <p>{name}</p>
      <p>{salary}AMD</p>
      <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        Delete
      </button>
    </div>
  );
};

export default UserItem;
