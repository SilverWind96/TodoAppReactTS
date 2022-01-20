import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { status } from "../Basic/TodoApp";
import { RootState } from "./store/store";
import TodoItemRedux, { ITodoRedux } from "./TodoItemRedux";

function TodoListRedux() {
  const navigate = useNavigate();
  const { todo } = useSelector((state: RootState) => state);

  const [filter, setFilter] = useState<status[]>([]);

  const handleFilterButton = (status: status) => {
    if (filter.includes(status)) {
      setFilter((prev) => prev.filter((ft) => ft !== status));
    } else {
      setFilter((prev) => [...prev, status]);
    }
  };

  const handleClearFilter = () => {
    setFilter([]);
  };

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="homeButton m-1 cursor-pointer"
      >
        Back
      </button>

      <div>
        <p>Filters</p>
        <div>
          <button
            className={`homeButton ${
              filter.includes("inprogress") ? "activeButton" : ""
            }`}
            onClick={() => handleFilterButton("inprogress")}
          >
            Inprogress
          </button>
          <button
            className={`homeButton ${
              filter.includes("passed") ? "activeButton" : ""
            }`}
            onClick={() => handleFilterButton("passed")}
          >
            Passed
          </button>
          <button
            className={`homeButton ${
              filter.includes("failed") ? "activeButton" : ""
            }`}
            onClick={() => handleFilterButton("failed")}
          >
            Failed
          </button>
          <button className="homeButton" onClick={handleClearFilter}>
            Clear
          </button>
        </div>
      </div>

      <ul id="myUL" className="flex flex-col items-center">
        {todo
          .filter((todoItem) => {
            if (filter.length === 0) {
              return true;
            } else {
              return filter.includes(todoItem.status);
            }
          })
          .map((todoItem: ITodoRedux) => (
            <TodoItemRedux key={todoItem.id} todo={todoItem} />
          ))}
      </ul>
    </>
  );
}

export default TodoListRedux;
