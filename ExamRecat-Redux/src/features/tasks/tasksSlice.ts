import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IState } from "./Task.type"
import axios from "axios"
import type { InputTask } from "../addTask/AddTask.types"

const initialState: IState = {
  tasks: [],
  error: null,
}

export const getAllTasks = createAsyncThunk("tasks/get", async () => {
  const response = await axios.get("http://localhost:3004/tasks")
  return response.data
})

export const addTask = createAsyncThunk(
  "tasks/add",
  async (param: InputTask) => {
    const response = await axios.post("http://localhost:3004/tasks", param)
    return response.data
  },
)

export const editTask = createAsyncThunk(
  "tasks/edit",
  async (param: InputTask) => {
    const response = await axios.put(
      `http://localhost:3004/tasks/${param?.id}`,
      param,
    )

    return response.data
  },
)

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async ({ id }: any) => {
    const response = await axios.delete(`http://localhost:3004/tasks/${id}`)
    console.log(response.data, "response.data11")
    return response.data
  },
)

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        })
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
      })
  },
})

export const tasksReducer = TasksSlice.reducer
