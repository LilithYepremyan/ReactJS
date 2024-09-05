import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      { id: 101, name: "Ashot", age: 20, salary: 300000 },
      { id: 102, name: "Lilit", age: 25, salary: 1200000 },
      { id: 103, name: "Anna", age: 21, salary: 700000 },
      { id: 104, name: "Aram", age: 30, salary: 500000 },
    ],
  },
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const userReducer = UserSlice.reducer;
export const { removeUser } = UserSlice.actions;
