import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/pillCards/PillsCard.slice";

export const store = configureStore({ reducer: userReducer });
