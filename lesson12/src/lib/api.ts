import axios from "axios";
import { ITodo } from "./types";

const URL = "http://localhost:3004/todos";

export const getAllToDos = async (): Promise<ITodo[]> => {
  const response = await axios.get(URL);
  return response.data;
};

type InputToDo = Omit<ITodo, "id">;

export const addToDo = async (obj: InputToDo): Promise<ITodo> => {
  const response = await axios.post(URL, obj);
  return response.data;
};
