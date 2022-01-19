import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
const AddTask: React.FC = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const handleAddBtn = () => {
    if (titleInput.length > 0 && contentInput.length > 0) {
      //   const newId = uuidv4();
      //   setTodos([
      //     ...todos,
      //     {
      //       status: "inprogress",
      //       id: newId,
      //       title: titleInput,
      //       content: contentInput,
      //       createdDate: new Date().toLocaleString(),
      //       finishedDate: "",
      //     },
      //   ]);
      setTitleInput("");
      setContentInput("");
    } else {
      alert("You must write something in title and content!");
    }
  };

  return (
    <div id="myDIV" className="header">
      <h3 className="">My To Do List</h3>
      <div className="flex">
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
        <button onClick={handleAddBtn} className="addBtn">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
