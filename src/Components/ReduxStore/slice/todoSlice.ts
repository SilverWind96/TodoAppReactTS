import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../Basic/TodoApp";
import { ITodoRedux } from "../TodoItemRedux";

const initialState: ITodoRedux[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    changeStatusTodo: (state, action) => {
      const tempState = [...state];
      const indexChangeStatus = tempState.findIndex(
        (todo) => todo.id === action.payload.id
      );
      tempState[indexChangeStatus].status = action.payload.status;
      if (action.payload.status === "passed") {
        tempState[indexChangeStatus].finishedDate = new Date().toLocaleString();
      } else {
        tempState[indexChangeStatus].finishedDate = "";
      }
      state = tempState;
    },
    modifyTodo: (state, action) => {
      const tempState = [...state];
      const indexModify = tempState.findIndex(
        (todo) => todo.id === action.payload.id
      );
      tempState[indexModify].title = action.payload.title;
      tempState[indexModify].content = action.payload.content;
      tempState[indexModify].status = "inprogress";
      tempState[indexModify].finishedDate = new Date().toLocaleString();
      return tempState;
    },
  },
});

export const { addTodo, removeTodo, changeStatusTodo } = todoSlice.actions;

export default todoSlice.reducer;
