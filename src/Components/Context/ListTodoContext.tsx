import React, { useContext, useState } from "react";
import { ITodo, status } from "../Basic/TodoApp";
import { TodosContext } from "./store/todo-context";
import TodoContext from "./TodoContext";

function ListTodoContext() {
  const todosCtx = useContext(TodosContext);
  const [filter, setFilter] = useState<status[]>([]);

  const handleFilterButton = (status: status) => {
    // setFilter({ ...filter, [status]: !filter[status] });
    if (filter.includes(status)) {
      setFilter(filter.filter((ft) => ft !== status));
    } else {
      // setFilter(filter.push())
      const temp = [...filter];
      temp.push(status);
      setFilter(temp);
    }
  };

  const handleClearFilter = () => {
    // setFilter({ passed: false, inprogress: false, failed: false });
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
          .map((todo: ITodo, index: number) => (
            <TodoContext key={index} todo={todo} index={index} />
          ))}
      </ul>
    </>
  );
}

export default ListTodoContext;
