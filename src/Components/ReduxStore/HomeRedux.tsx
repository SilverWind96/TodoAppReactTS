import React from "react";
import { Link } from "react-router-dom";

function HomeRedux() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="addTodo" className="homeButton">
        Add Todo
      </Link>
      <Link to="viewTodoList" className="homeButton">
        View Todo List
      </Link>
    </div>
  );
}

export default HomeRedux;
