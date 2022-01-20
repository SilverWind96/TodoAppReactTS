import React from "react";
import { Link } from "react-router-dom";

function HomeRTK() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="addTodoRTK" className="homeButton">
        Add Todo
      </Link>
      <Link to="viewTodoListRTK" className="homeButton">
        View Todo List
      </Link>
    </div>
  );
}

export default HomeRTK;
