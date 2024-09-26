import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes:["Users"],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => "/users",
      providesTags:['Users']
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user
      }),
      invalidatesTags:['Users']
    }),
    updateTask: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest
      }),
      invalidatesTags:['Users']
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:['Users']
    })
  })
});
export const {useUsersQuery,useAddUserMutation,useDeleteTaskMutation,useUpdateTaskMutation}=usersApi