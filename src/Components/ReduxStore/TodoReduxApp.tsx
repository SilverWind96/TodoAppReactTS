import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddTodoRedux from "./AddTodoRedux";
import HomeRedux from "./HomeRedux";
import { store } from "./store/store";
import TodoListRedux from "./TodoListRedux";

function TodoReduxApp() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="redux" element={<HomeRedux />} />
        <Route path="redux/addTodo" element={<AddTodoRedux />} />
        <Route path="redux/viewTodoList" element={<TodoListRedux />} />
      </Routes>
    </Provider>
  );
}

export default TodoReduxApp;
