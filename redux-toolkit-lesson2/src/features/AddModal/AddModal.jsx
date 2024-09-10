import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Button,
} from "@mui/material";

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddModal = ({
  open,
  handleAddClose,
  onAddUser,
  addUser,
  handleAddInputChange,
}) => {
  const handleSave = (e) => {
    e.preventDefault();
    onAddUser(addUser);

    handleAddClose();
  };

  return (
    <Modal
      disableEnforceFocus
      open={open}
      onClose={handleAddClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyles}>
        <form onSubmit={handleSave}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
              style={{ height: "10px" }}
              id="name-input"
              value={addUser.id.name}
              onChange={(e) =>
                handleAddInputChange("id", { name: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="value-input">Value</InputLabel>
            <Input
              style={{ height: "10px" }}
              id="value-input"
              value={addUser.id.value}
              onChange={(e) =>
                handleAddInputChange("id", { value: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="title-input">Title</InputLabel>
            <Input
              style={{ height: "10px" }}
              id="title-input"
              value={addUser.name.title}
              onChange={(e) =>
                handleAddInputChange("name", { title: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="first-input">First name</InputLabel>
            <Input
              style={{ height: "10px" }}
              id="first-input"
              value={addUser.name.first}
              onChange={(e) =>
                handleAddInputChange("name", { first: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="last-input">Last name</InputLabel>
            <Input
              style={{ height: "10px" }}
              id="last-input"
              value={addUser.name.last}
              onChange={(e) =>
                handleAddInputChange("name", { last: e.target.value })
              }
            />
          </FormControl>
          <Button type="submit" variant="contained" color="default" fullWidth>
            Add User
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddModal;
