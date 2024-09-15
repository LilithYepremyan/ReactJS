import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { addRate } from "../classbook/classbook.slice";

const style = {
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

interface IRateModal {
  open: boolean;
  handleClose: () => void;
  student: any;
  lesson: any;
  handleSaveRate: (rating: number) => void;
}

export default function RateModal({
  open,
  handleClose,
  student,
  lesson,
  handleSaveRate,
}: IRateModal) {

  const [rate, setRate] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRate(event.target.value as string);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rate</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rate}
                label="Rate"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => handleSaveRate(Number(rate))}
            >
              Save Rate
            </Button>
            {Number(rate) <= 10 && Number(rate) > 7 ? (
              <Typography
                my={2}
                style={{
                  color: "green",
                }}
              >
                Excellent rating
              </Typography>
            ) : Number(rate) <= 7 && Number(rate) >= 5 ? (
              <Typography my={2} style={{ color: "orange" }}>
                Satisfactory rating
              </Typography>
            ) : (
              <Typography my={2} style={{ color: "red" }}>
                Unsatisfactory rating
              </Typography>
            )}
          </Box>
        </>
      </Modal>
    </div>
  );
}
