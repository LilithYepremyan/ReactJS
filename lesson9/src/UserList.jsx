import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import UserItem from "./UserItem";

const UserList = () => {
  //   const { users } = useContext(UserContext);
  const {
    state: { users },
  } = useContext(UserContext);

  console.log(users);
  return (
    <>
      <h3>UserList</h3>
      {users?.map((elm) => (
        <UserItem key={elm.id} {...elm} />
      ))}
    </>
  );
};

export default UserList;
