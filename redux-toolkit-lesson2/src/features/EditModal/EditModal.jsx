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

// eslint-disable-next-line react/prop-types
const EditModal = ({
  open,
  onClose,
  selectedUser,
  onSave,
  handleInputChange,
}) => {
  const handleSave = (e) => {
    e.preventDefault();
    onSave(selectedUser);
  };

  return (
    <Modal
      disableEnforceFocus
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyles}>
        <form onSubmit={handleSave}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
              id="name-input"
              style={{ height: "10px" }}
              value={selectedUser.id.name}
              onChange={(e) =>
                handleInputChange("id", { name: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="value-input">Value</InputLabel>
            <Input
              id="value-input"
              style={{ height: "10px" }}
              value={selectedUser.id.value}
              onChange={(e) =>
                handleInputChange("id", { value: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="title-input">Title</InputLabel>
            <Input
              id="title-input"
              style={{ height: "10px" }}
              value={selectedUser.name.title}
              onChange={(e) =>
                handleInputChange("name", { title: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="first-input">First name</InputLabel>
            <Input
              id="first-input"
              style={{ height: "10px" }}
              value={selectedUser.name.first}
              onChange={(e) =>
                handleInputChange("name", { first: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="last-input">Last name</InputLabel>
            <Input
              id="last-input"
              style={{ height: "10px" }}
              value={selectedUser.name.last}
              onChange={(e) =>
                handleInputChange("name", { last: e.target.value })
              }
            />
          </FormControl>
          <Button type="submit" variant="contained" color="default" fullWidth>
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;
