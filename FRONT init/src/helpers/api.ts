import axios from "axios";
import { IResponse, IUser, PartialUser } from "./type";

export const Axios = axios.create({
  baseURL: "http://localhost:4002",
  withCredentials: true,
});

export const handleSignup = async (user: IUser): Promise<IResponse> => {
  const response = await Axios.post("/signup", user);
  return response.data;
};

export const handleLogin = async (user: PartialUser): Promise<IResponse> => {
  const response = await Axios.post("/login", user);
  return response.data;
};

export const verifyUser = async (): Promise<IResponse> => {
  const response = await Axios.get("/verify");
  return response.data;
};

export const handleLogOut = async (): Promise<IResponse> => {
  const response = await Axios.post("/logout");
  return response.data;
};

export const handleUpload = async (form: FormData): Promise<IResponse> => {
  const response = await Axios.patch("/profile/upload", form);
  return response.data;
};

export const handlePostUpload = async (form: FormData): Promise<IResponse> => {
  const response = await Axios.post("/posts", form);
  return response.data;
};

export const getAllPosts = async (): Promise<IResponse> => {
  const response = await Axios.get("/posts");
  return response.data;
};

export const handleUserPrivacy = async (): Promise<IResponse> => {
  const response = await Axios.patch("/account/set");
  return response.data;
};

export const updateUserLogin = async (requestBody: {
  password: string;
  login: string;
}): Promise<IResponse> => {
  console.log("test");

  const response = await Axios.patch("/update/login", requestBody);
  return response.data;
};

export const updateUserPassword = async (requestBody: {
  old: string;
  newpwd: string;
}): Promise<IResponse> => {
  console.log("test");

  const response = await Axios.patch("/update/password", requestBody);
  return response.data;
};

export const deletePost = async (id: number): Promise<IResponse> => {
  const response = await Axios.delete("/posts/" + id);
  return response.data;
};
