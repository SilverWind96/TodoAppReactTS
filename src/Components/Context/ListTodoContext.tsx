import React, { useContext, useState } from "react";
import { status } from "../Basic/TodoApp";
import { TodosContext } from "./store/todo-context";
import TodoContext, { ITodoContext } from "./TodoContext";

function ListTodoContext() {
  const todosCtx = useContext(TodosContext);
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
        {todosCtx.todoList
          .filter((todoItem) => {
            if (filter.length === 0) {
              return true;
            } else {
              return filter.includes(todoItem.status);
            }
          })
          .map((todo: ITodoContext, index: number) => (
            <TodoContext key={todo.id} todo={todo} />
          ))}
      </ul>
    </>
  );
}

export default ListTodoContext;
