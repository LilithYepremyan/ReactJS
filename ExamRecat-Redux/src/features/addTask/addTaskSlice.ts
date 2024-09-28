import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import  type{ InputTask } from "./AddTask.types";

export const addTask  = createAsyncThunk("tasks/add" , async (param :InputTask)=> {
    const response = await axios.post("http://localhost:3004/tasks", param)
    return response.data
})