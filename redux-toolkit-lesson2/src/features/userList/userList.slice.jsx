import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const getAllUsers = createAsyncThunk("users/get", async () => {
  const response = await fetch(
    "https://randomuser.me/api?results=8&inc=name,id"
  );
  const data = await response.json();

  const usersWithId = data.results.map((user) => {
    return { ...user, uniqueId: uuidv4() };
  });

  return { results: usersWithId };
});

const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    fullfiled: (state, action) => {
      console.log("ok", action);
      state.users = action.payload.results;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id.name !== action.payload;
      });
    },

    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex(
        (user) => user.uniqueId === updatedUser.uniqueId
      );

      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    addNewUser:(state, action)=>{
      const newUser = action.payload;
      state.users.push(newUser);  
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        // console.log("pending");
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        // console.log("fulfilled", action);
        state.users = action.payload.results;
        state.isLoading = false;
        console.log("state userss", state.users);
      })
      .addCase(getAllUsers.rejected, () => {
        console.log("Error");
      });
  },
});

export const userReducer = UserSlice.reducer;
export const { deleteUser, updateUser, addNewUser } = UserSlice.actions;
