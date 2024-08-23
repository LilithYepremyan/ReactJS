import axios from "axios";
import { IResponse, IUser, PartialUser } from "./types";

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

export const handleLogout = async (): Promise<IResponse> => {
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

export const deletePost = async (id: number): Promise<IResponse> => {
  const response = await Axios.delete("/posts/" + id);
  return response.data;
};

export const handlePrivacy = async (): Promise<IResponse> => {
  const response = await Axios.patch("/account/set");
  return response.data;
};

export const handlePasswordChange = async (payload: {
  old: string;
  newpwd: string;
}): Promise<IResponse> => {
  const response = await Axios.patch("/update/password", payload);
  return response.data;
};

export const handleLoginChange = async (payload: {
  password: string;
  login: string;
}): Promise<IResponse> => {
  const response = await Axios.patch("/update/login", payload);
  return response.data;
};

export const searchUsers = async (text: string): Promise<IResponse> => {
  const response = await Axios.get("/search/" + text);
  return response.data;
};

export const getAccount = async (id: string): Promise<IResponse> => {
  const response = await Axios.get("/account/" + id);
  return response.data;
};

export const handleFollow = async (id: number): Promise<IResponse> => {
  const response = await Axios.post("/account/follow/" + id);
  return response.data;
};

export const handleUnfollow = async (id: number): Promise<IResponse> => {
  const response = await Axios.post("/account/unfollow/" + id);
  return response.data;
};

export const handleCancelation = async (id: number): Promise<IResponse> => {
  const response = await Axios.delete("/request/cancel/" + id);
  //
  return response.data;
};

export const handleRequests = async (): Promise<IResponse> => {
  const response = await Axios.get("/requests");
  return response.data;
};

export const handleAcceptRequest = async (id: number): Promise<IResponse> => {
  const response = await Axios.patch("/requests/accept/" + id);
  return response.data;
};

export const handleDeclineRequest = async (id: number): Promise<IResponse> => {
  const response = await Axios.patch("/requests/decline/" + id);
  return response.data;
};

export const handlePostReaction = async (id: number): Promise<IResponse> => {
  const response = await Axios.post("/posts/react/" + id);
  return response.data;
};

export const handlePostById = async (id: number): Promise<IResponse> => {
  const response = await Axios.get("/posts/" + id);
  return response.data;
};

export const handleAddComment = async (
  id: number,
  comment: string
): Promise<IResponse> => {
  const response = await Axios.post("/posts/comment/" + id, { comment });
  return response.data;
};
