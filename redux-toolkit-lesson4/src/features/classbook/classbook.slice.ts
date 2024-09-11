import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InputLesson, IState } from "./types";
import axios from "axios";

const initialState: IState = {
  lessons: [],
};

export const getLessons = createAsyncThunk("lessons/get", async () => {
  const response = await axios.get("http://localhost:3004/lessons");
  return response.data;
});

export const addLesson = createAsyncThunk(
  "lessons/add",
  async (param: InputLesson) => {
    const response = await axios.post("http://localhost:3004/lessons", param);
    return response.data;
  }
);

const ClassBookSlice = createSlice({
  name: "classbook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.lessons.push(action.payload);
      });
  },
});

export const classReducer = ClassBookSlice.reducer;
