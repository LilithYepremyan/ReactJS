import React from "react";
import { IContextType } from "./types";

export const EventContext = React.createContext<IContextType | undefined>(
  undefined
);
