import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EventContext } from "../lib/Context";
import { ActionTypes } from "../lib/types";

interface Inputs {
  title: string;
  date: string;
  composer: string;
  time: string;
  cover: string;
  type: string;
}

export const AddEvent = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("Outside a provider...");
  }
  const { dispatch } = context;

  const [open, setIsOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<Inputs>();

  const handleAdd: SubmitHandler<Inputs> = (data) => {
    axios.post("http://localhost:3004/events", data).then((res) => {
      dispatch({ type: ActionTypes.addEvent, payload: res.data });
      setIsOpen(false);
      reset();
      axios.get("http://localhost:3004/events").then((response) => {
        dispatch({ type: ActionTypes.setEvents, payload: response.data });
      });
    });
  };

  return (
    <>
      <h1>Add</h1>
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
                {errors.title && errors.title.type == "required" && (
                  <p style={{ color: "red" }}>Please fill the field</p>
                )}
                {errors.title && errors.title.type == "pattern" && (
                  <p style={{ color: "red" }}>{errors.title.message}</p>
                )}
                <TextField
                  label="title"
                  variant="outlined"
                  {...register("title", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/,
                      message: "Invalid title format",
                    },
                  })}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                {errors.date && errors.date.type == "required" && (
                  <p style={{ color: "red" }}>Please fill the date</p>
                )}
                {errors.date && errors.date.type == "pattern" && (
                  <p style={{ color: "red" }}>{errors.date.message}</p>
                )}
                <TextField
                  label="date"
                  variant="outlined"
                  {...register("date", {
                    required: true,
                    pattern: {
                      value:
                        /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
                      message:
                        "Invalid date format. Please use dd.mm.yyyy format.",
                    },
                  })}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                {errors.time && errors.time.type == "required" && (
                  <p style={{ color: "red" }}>Please fill the time</p>
                )}
                {errors.time && errors.time.type == "pattern" && (
                  <p style={{ color: "red" }}>{errors.time.message}</p>
                )}
                <TextField
                  label="time"
                  variant="outlined"
                  {...register("time", {
                    required: true,
                    pattern: {
                      value: /^([01]\d|2[0-3]):([0-5]\d)$/,
                      message: "Invalid time format. Please use 12:00 format",
                    },
                  })}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                {errors.composer && errors.composer.type == "required" && (
                  <p style={{ color: "red" }}>Please fill the composer</p>
                )}

                {errors.composer && errors.composer.type == "pattern" && (
                  <p style={{ color: "red" }}>{errors.composer.message}</p>
                )}
                <TextField
                  label="composer"
                  variant="outlined"
                  {...register("composer", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z0-9\s\-,.!?'"]*$/,
                      message: "Invalid composer format",
                    },
                  })}
                ></TextField>
              </Box>{" "}
              <Box my={2}>
                {errors.cover && errors.cover.type == "required" && (
                  <p style={{ color: "red" }}>Please fill the cover</p>
                )}

                {errors.cover && errors.cover.type == "pattern" && (
                  <p style={{ color: "red" }}>{errors.cover.message}</p>
                )}

                <TextField
                  label="cover"
                  variant="outlined"
                  {...register("cover", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9!@#$%^&*()_+-=\\[\]{};:'",.<>/?]*$/,
                      message: "Invalid cover format",
                    },
                  })}
                ></TextField>
              </Box>
              <Box my={2}>
                <Select
                  {...register("type", {
                    required: true,
                  })}
                  value={watch("type") || ""}
                  sx={{ width: 220 }}
                  onChange={(e) => setValue("type", e.target.value as string)}
                >
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
