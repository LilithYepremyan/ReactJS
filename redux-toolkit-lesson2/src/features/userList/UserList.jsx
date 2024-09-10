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
  const [addUser, setAddUser] = useState({
    id: { name: "", value: "" },
    name: { title: "", first: "", last: "" },
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleOpenAddModal = (user) => {
    setIsAddModalOpen(true);
    setAddUser(user);
  };

  const handleClose = () => setIsEditModalOpen(false);

  const handleEditInputChange = (field, value) => {
    setSelectedUser((prev) => ({
      ...prev,
      [field]: { ...prev[field], ...value },
    }));
  };

  const handleAddInputChange = (field, value) => {
    setAddUser((prev) => ({
      ...prev,
      [field]: { ...prev[field], ...value },
    }));
  };
  const handleSaveUpdate = () => {
    dispatch(updateUser(selectedUser));
    handleClose();
  };

  const handleAddUser = (selectedUser) => {
    dispatch(addNewUser(selectedUser));

    handleClose();
  };

  const handleAddClose = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <h1>User List</h1>
      {loader && <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" />}

      <button onClick={() => handleOpenAddModal(addUser)}>Add User</button>

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
                <button onClick={() => handleOpenEditModal(el)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(el.id.name))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddModal
        open={isAddModalOpen}
        handleAddClose={handleAddClose}
        onAddUser={handleAddUser}
        addUser={addUser}
        handleAddInputChange={handleAddInputChange}
      ></AddModal>

      <EditModal
        open={isEditModalOpen}
        handleClose={handleClose}
        selectedUser={selectedUser}
        onSave={handleSaveUpdate}
        handleInputChange={handleEditInputChange}
      />
    </div>
  );
};

export default UserList;
