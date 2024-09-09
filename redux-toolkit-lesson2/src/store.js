import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userList/userList.slice";
import { asyncMiddleware } from "./middlweare";

export const store = configureStore({ reducer: userReducer , middleware: getDefaultMiddleware=> {
    return getDefaultMiddleware().concat(asyncMiddleware)
}});
