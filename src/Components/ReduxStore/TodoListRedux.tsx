import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../Basic/TodoApp";
import { RootState } from "./store/store";
import TodoItemRedux from "./TodoItemRedux";

function TodoListRedux() {
  const navigate = useNavigate();
  const { todo } = useSelector((state: RootState) => state);

  return (
    <>
      <ul id="myUL" className="flex flex-col items-center">
        {todo.map((todoItem: ITodo) => (
          <TodoItemRedux key={todoItem.id} todo={todoItem} />
        ))}
        <button
          onClick={() => navigate(`/`)}
          className="homeButton mt-2 cursor-pointer"
        >
          Cancel
        </button>
      </ul>
    </>
  );
}

export default TodoListRedux;
