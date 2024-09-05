import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userList/userList.slice";

export const store = configureStore({ reducer: userReducer });
