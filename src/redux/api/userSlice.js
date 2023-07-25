import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:4400/users',
    credentials: 'include',
  }),
  tagTypes: ['User'],

  endpoints: (builder) => ({


    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

  }),

})

export const {
  useRegisterMutation,
  useLoginMutation,

} = userSlice;