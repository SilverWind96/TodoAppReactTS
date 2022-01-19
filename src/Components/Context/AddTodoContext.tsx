import React, { SyntheticEvent, useContext, useState } from "react";
import { TodosContext } from "./store/todo-context";

const AddTodoContext: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (titleInput.length > 0 && contentInput.length > 0) {
      todosCtx.addTodo(titleInput, contentInput);
      setTitleInput("");
      setContentInput("");
    } else {
      alert("You must write something in title and content!");
    }
  };

  return (
    <div id="myDIV" className="header">
      <h3 className="">My To Do List</h3>
      <form className="flex" onSubmit={handleFormSubmit}>
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            id="myInput"
            placeholder="Title..."
          />
          <input
            type="text"
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            id="myInput"
            placeholder="Content..."
          />
        </div>
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodoContext;
