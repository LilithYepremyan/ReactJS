import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { InputTask } from "../addTask/AddTask.types"

export const editTask = createAsyncThunk(
  "tasks/add",
  async (param: InputTask) => {
    const response = await axios.patch(
      `http://localhost:3004/tasks/${param?.id}`,
      param,
    )
    return response.data
  },
)
