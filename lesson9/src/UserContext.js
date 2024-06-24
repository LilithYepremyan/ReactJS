import React from "react";

export const UserContext = React.createContext();

export const initialState = {
  users: [
    { id: 101, name: "Ashot", salary: 800000 },
    { id: 102, name: "Hayk", salary: 400000 },
    { id: 103, name: "Mark", salary: 500000 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        users: state.users.filter((x) => x.id != action.payload),
      };
    default:
      return state;
  }
};
