import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "./slice/todoSlice";
import { ITodoRedux } from "./TodoItemRedux";
function AddTodoRedux() {
  // const todosCtx = useContext(TodosContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (titleInput.length > 0 && contentInput.length > 0) {
      const newId = uuidv4();
      const newTodo: ITodoRedux = {
        status: "inprogress",
        id: newId,
        title: titleInput,
        content: contentInput,
        createdDate: new Date().toLocaleString(),
        finishedDate: "",
        modifiedDate: "",
      };
      dispatch(addTodo(newTodo));
      alert("New to do added successfully");
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
      <button
        onClick={() => navigate(-1)}
        className="homeButton mt-2 cursor-pointer"
      >
        Cancel
      </button>
    </div>
  );
}

export default AddTodoRedux;
