import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { InputUser, IUser } from "./types"

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["Users"],
  endpoints: builder => ({
    getUsers: builder.query<IUser[], null>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation<IUser, InputUser>({
      query: param => ({
        url: "/users",
        method: "POST",
        body: param,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation<IUser, string>({
      query: id => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
})

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } =
  usersApi
