import { MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { EventContext } from "../lib/Context";
import { ActionTypes } from "../lib/types";

export const Filter: React.FC = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("Out of provider...");
  }

  const { state, dispatch } = context;

  return (
    <>
      {/* <h1>Filter</h1> */}
      <Select
        sx={{ width: 300 }}
        value={state.currentFilter}
        onChange={(e) =>
          dispatch({ type: ActionTypes.setFilter, payload: e.target.value })
        }
      >
        <MenuItem value="all">all</MenuItem>
        <MenuItem value="opera">opera</MenuItem>
        <MenuItem value="ballet">ballet</MenuItem>
      </Select>
    </>
  );
};
