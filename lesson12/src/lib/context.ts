import React from "react";
import type { IContextType } from "./types";

export const ToDoContext = React.createContext<IContextType | undefined>(
  undefined
);
