import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { InputTask } from "../addTask/AddTask.types"

export const editTask = createAsyncThunk(
  "tasks/edit",
  async (param: InputTask) => {
    const response = await axios.put(
      `http://localhost:3004/tasks/${param?.id}`,
      param,
    )

    console.log(response.data, "response.data<<<")
    return response.data
  },
)
