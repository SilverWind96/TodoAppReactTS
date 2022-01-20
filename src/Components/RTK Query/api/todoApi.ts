import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodoRTK } from "../type";
// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodoList: builder.query<{ data: ITodoRTK[] }, void>({
      query: () => ``,
      providesTags: ["Todo"],
    }),
    addNewTodo: builder.query<ITodoRTK, ITodoRTK>({
      query: (body) => ({
        url: "create",
        method: "POST",
        body,
      }),
      // async onQueryStarted({}, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;
      //     console.log(data);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
    }),
    updateTodo: builder.mutation<ITodoRTK, Partial<ITodoRTK>>({
      query: (data) => ({
        url: `${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation<ITodoRTK, string | number>({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodoListQuery,
  useAddNewTodoQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
