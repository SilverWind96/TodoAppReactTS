import React, { useState, SyntheticEvent } from "react";

import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
export type status = "inprogress" | "passed" | "failed";
export interface ITodo {
  id: string | number;
  title: string;
  content: string;
  createdDate: string;
  finishedDate: string;
  status: status;
}
function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const handleAddBtn = () => {
    if (titleInput.length > 0 && contentInput.length > 0) {
      const newId = uuidv4();
      setTodos([
        ...todos,
        {
          status: "inprogress",
          id: newId,
          title: titleInput,
          content: contentInput,
          createdDate: new Date().toLocaleString(),
          finishedDate: "",
        },
      ]);
      setTitleInput("");
      setContentInput("");
    } else {
      alert("You must write something in title and content!");
    }
  };

  const onStatusChange = (status: status, index: number) => {
    const temp = [...todos];

    temp[index].status = status;

    if (status === "passed") {
      temp[index].finishedDate = new Date().toLocaleString();
    } else {
      temp[index].finishedDate = "";
    }

    setTodos(temp);
  };

  const onClose = (e: SyntheticEvent, index: number) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h3 className="">My To Do List</h3>
        <div className="flex">
          <div
            style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}
          >
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
          <button onClick={handleAddBtn} className="addBtn">
            Add
          </button>
        </div>
      </div>

      <ul id="myUL" className="flex flex-col items-center">
        {todos.map((todo: ITodo, index: number) => (
          <Todo
            key={index}
            todo={todo}
            onClose={onClose}
            index={index}
            onStatusChange={onStatusChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
