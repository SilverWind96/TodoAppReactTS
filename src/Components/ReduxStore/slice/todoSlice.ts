import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../Basic/TodoApp";

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    changeStatusTodo: (state, action) => {
      const indexChangeStatus = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[indexChangeStatus].status = action.payload.status;
      if (action.payload.status === "passed") {
        state[indexChangeStatus].finishedDate = new Date().toLocaleString();
      } else {
        state[indexChangeStatus].finishedDate = "";
      }
    },
  },
});

export const { addTodo, removeTodo, changeStatusTodo } = todoSlice.actions;

export default todoSlice.reducer;
