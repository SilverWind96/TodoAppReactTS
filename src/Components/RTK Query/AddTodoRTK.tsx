import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAddNewTodoQuery } from "./api/todoApi";
import { IError, ITodoRTK } from "./type";
function AddTodoRTK() {
  const navigate = useNavigate();

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [submitState, setSubmitState] = useState(false);

  const { error, isSuccess, isFetching } = useAddNewTodoQuery(
    {
      status: "inprogress",
      id: uuidv4(),
      title: titleInput,
      content: contentInput,
      createdDate: new Date().toLocaleString(),
      finishedDate: "",
      modifiedDate: "",
    },
    { skip: !submitState && !!titleInput && !!contentInput }
  );
  useEffect(() => {
    if (titleInput.length > 0 && contentInput.length > 0) {
      setSubmitState(false);
    }
  }, [titleInput, contentInput]);

  useEffect(() => {
    console.log({ isSuccess, isFetching, error });
    setSubmitState(false);
    if (isSuccess) {
      setTitleInput("");
      setContentInput("");
      alert("new todo added successfully");
      // setSubmitState(false);
    } else if (error !== undefined && "data" in error) {
      alert((error?.data as IError).msg);
    } else {
      console.log();
    }
  }, [error, isSuccess, isFetching]);

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // if (titleInput.length > 0 && contentInput.length > 0) {
    //   setSubmitState(true);
    // } else {
    //   alert("You must write something in title and content!");
    // }
    // if (titleInput.length > 0 && contentInput.length > 0) {
    //   const newId = uuidv4();
    //   const newTodo: ITodoRTK = {
    //     status: "inprogress",
    //     id: newId,
    //     title: titleInput,
    //     content: contentInput,
    //     createdDate: new Date().toLocaleString(),
    //     finishedDate: "",
    //     modifiedDate: "",
    //   };
    //   addNewTodo(newTodo);
    //   console.log(newTodo);
    // } else {
    //   alert("You must write something in title and content!");
    // }
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

export default AddTodoRTK;
