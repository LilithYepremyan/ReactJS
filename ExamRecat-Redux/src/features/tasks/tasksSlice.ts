import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IState } from "./Task.type"
import axios from "axios"
import { editTask } from "../editTask/editTaskSlice"

const initialState: IState = {
  tasks: [],
  error: null,
}

export const getAllTasks = createAsyncThunk("tasks/get", async () => {
  const response = await axios.get("http://localhost:3004/tasks")
  console.log(response.data, "response.data")

  return response.data
})

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        })
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export const tasksReducer = TasksSlice.reducer
