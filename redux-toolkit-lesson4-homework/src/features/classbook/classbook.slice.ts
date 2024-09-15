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

// export const addRate = createAsyncThunk(
//   "lessons/rate",
//   async (param: { lessonId: string; rate: number; studentId: string }) => {
//     const { lessonId, studentId, rate } = param;
//     const response = await axios.patch(
//       `http://localhost:3004/lessons/${lessonId}`,
//       { rating: { student: studentId, rate } }
//     );
//     console.log(response.data, "response");
//     return response.data;
//   }
// );

export const addRate = createAsyncThunk(
  "lessons/rate",
  async (payload: {
    lessonId: string;
    ratings: Array<{ id: string; student: string; rate: string }>;
  }) => {
    const response = await axios.patch(
      `http://localhost:3004/lessons/${payload.lessonId}`,
      { ratings: payload.ratings }
    );
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
      })
      .addCase(addRate.fulfilled, (state, action) => {
        const addRate = action.payload;
        console.log(addRate, "updatedLesson");

        const lessonIndex = state.lessons.findIndex(
          (lesson) => lesson.id === addRate.id
        );

        if (lessonIndex !== -1) {
          state.lessons[lessonIndex] = addRate;
        }
      });
  },
});

export const classReducer = ClassBookSlice.reducer;
