import React, { useContext } from "react";
import { ITodo } from "../Basic/TodoApp";
import { TodosContext } from "./store/todo-context";
import TodoContext from "./TodoContext";

function ListTodoContext() {
  const todosCtx = useContext(TodosContext);
  return (
    <ul id="myUL" className="flex flex-col items-center">
      {todosCtx.todoList.map((todo: ITodo, index: number) => (
        <TodoContext key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default ListTodoContext;
