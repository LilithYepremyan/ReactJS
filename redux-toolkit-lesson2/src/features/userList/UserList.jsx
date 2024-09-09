import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "./userList.slice";
import style from "./userList.module.css";
import EditModal from "../EditModal/EditModal";
import AddModal from "../AddModal/AddModal";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log("Users from Redux state:", users);
  }, [users]);

  const [selectedUser, setSelectedUser] = useState({
    id: { name: "", value: "" },
    name: { title: "", first: "", last: "" },
  });
  const [open, setOpen] = useState(false);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleInputChange = (field, value) => {
    setSelectedUser((prev) => ({
      ...prev,
      [field]: { ...prev[field], ...value },
    }));
  };

  const handleSave = () => {
    dispatch(updateUser(selectedUser));
    handleClose();
  };

  const handleAddUser = (user) => {
    dispatch(addNewUser(user));

    handleClose();
  };

  return (
    <div>
      <h1>User List</h1>
      {loader && <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" />}

      <button onClick={() => handleAddUser(selectedUser)}>Add User</button>

      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Title</th>
            <th>Last name</th>
            <th>First name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr key={`${el.id?.name}${el.name?.first}`}>
              <td>{el.id?.name}</td>
              <td>{el.id?.value}</td>
              <td>{el.name?.title}</td>
              <td>{el.name?.first}</td>
              <td>{el.name?.last}</td>
              <td>
                <button onClick={() => handleOpen(el)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(el.id.name))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddModal
        open={open}
        handleClose={handleClose}
        onAddUser={handleAddUser}
      ></AddModal>

      <EditModal
        open={open}
        handleClose={handleClose}
        selectedUser={selectedUser}
        onSave={handleSave}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default UserList;
