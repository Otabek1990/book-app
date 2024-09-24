import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { BASE_URL } from "../constants";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    // updateTask: builder.mutation({
    //   query: ({ id, ...rest }) => ({
    //     url: `/tasks/${id}`,
    //     method: "PUT",
    //     body: rest
    //   }),
    //   invalidatesTags: ["Task"]
    // }),
    // deleteTask: builder.mutation({
    //   query: (id) => ({
    //     url: `/tasks/${id}`,
    //     method: "DELETE"
    //   }),
    //   invalidatesTags: ["Task"]
    // })
  }),
});
export const {useUsers} = usersApi;
