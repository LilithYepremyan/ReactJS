import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  title: string;
  date: string;
  composer: string;
  time: string;
  cover: string;
  type: string;
}

export const AddEvent = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const handleAdd: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box my={2}>
        <Button onClick={() => setIsOpen(true)} variant="contained">
          add
        </Button>
        <Modal
          open={open}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              color: "black",
            }}
          >
            <form onSubmit={handleSubmit(handleAdd)}>
              <Box my={2}>
                <TextField
                  label="title"
                  variant="outlined"
                  {...register("title")}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                <TextField
                  label="date"
                  variant="outlined"
                  {...register("date")}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                <TextField
                  label="time"
                  variant="outlined"
                  {...register("time")}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                <TextField
                  label="composer"
                  variant="outlined"
                  {...register("composer")}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                <TextField
                  label="cover"
                  variant="outlined"
                  {...register("cover")}
                ></TextField>
              </Box>
              <Box my={2}>
                <Select sx={{ width: 220 }}>
                  <MenuItem value="opera">opera</MenuItem>
                  <MenuItem value="ballet">ballet</MenuItem>
                </Select>
              </Box>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </Box>
    </>
  );
};
