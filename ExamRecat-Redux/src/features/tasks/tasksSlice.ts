import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IState } from "./Task.type"
import axios from "axios"

const initialState: IState = {
  tasks: [],
}

export const getAllTasks = createAsyncThunk("tasks/get", async () => {
  const response = await axios.get("http://localhost:3004/tasks")
  return response.data
})

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.tasks = action.payload
    })
  },
})

export const tasksReducer = TasksSlice.reducer
