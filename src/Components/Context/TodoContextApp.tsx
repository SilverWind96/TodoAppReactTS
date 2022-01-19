import React from "react";
import AddTodoContext from "./AddTodoContext";
import ListTodoContext from "./ListTodoContext";
import { TodosContextProvider } from "./store/todo-context";

function TodoContextApp() {
  return (
    <TodosContextProvider>
      <AddTodoContext />
      <ListTodoContext />
    </TodosContextProvider>
  );
}

export default TodoContextApp;
