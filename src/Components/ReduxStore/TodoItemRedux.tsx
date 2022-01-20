import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatusTodo, removeTodo } from "./slice/todoSlice";

type status = "inprogress" | "passed" | "failed";

export type ITodoRedux = {
  id: string | number;
  title: string;
  content: string;
  createdDate: string;
  finishedDate: string;
  status: status;
  modifiedDate: string;
};

type Props = {
  todo: ITodoRedux;
};

const TodoItemRedux: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const [editState, setEditState] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  useEffect(() => {
    setTitleInput(todo.title);
    setContentInput(todo.content);
  }, [todo]);

  const handleSaveTodo = () => {
    if (titleInput.length > 0 && contentInput.length > 0) {
      // todoCtx.modifyTodo(todo.id, titleInput, contentInput);
      setEditState(false);
    } else {
      alert("Title and content must not be empty");
    }
  };

  return (
    <li
      className={`flex ${todo.status === "passed" ? "passed" : ""} ${
        todo.status === "failed" ? "failed" : ""
      }`}
    >
      <div className="w-90">
        <div className="flex ">
          {editState && todo.status === "failed" ? (
            <input
              type="text"
              className="w-full"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          ) : (
            <h2>{todo.title}</h2>
          )}
        </div>
        <div className="flex">
          {editState && todo.status === "failed" ? (
            <input
              type="text"
              className="w-full"
              value={contentInput}
              onChange={(e) => setContentInput(e.target.value)}
            />
          ) : (
            <p className="content">{todo.content}</p>
          )}
        </div>
        <div className="flex justify-between">
          <p className="w-30 date">Created Date: {todo.createdDate}</p>
          <p className="w-30 date">
            {todo.modifiedDate && <>Modified Date: {todo.modifiedDate}</>}
          </p>
          <p className="w-30 date">
            {todo.finishedDate && <>Finished Date: {todo.finishedDate}</>}
          </p>
          <div className="flex w-10">
            {todo.status === "failed" && !editState && (
              <button
                className="todoActionButton"
                onClick={() => setEditState(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgButton"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            )}
            {todo.status === "failed" && editState && (
              <>
                <button
                  className="todoActionTextButton"
                  onClick={handleSaveTodo}
                >
                  Save
                </button>
                <button
                  className="todoActionTextButton"
                  onClick={() => {
                    setEditState(false);
                  }}
                >
                  Discard
                </button>
              </>
            )}
            {todo.status !== "passed" && !editState && (
              <button
                className="todoActionButton"
                onClick={() =>
                  dispatch(changeStatusTodo({ status: "passed", id: todo.id }))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgButton"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            )}
            {todo.status !== "failed" && (
              <button
                className="todoActionButton"
                onClick={() =>
                  dispatch(changeStatusTodo({ status: "failed", id: todo.id }))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgButton"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center flex-grow">
        <button
          className="todoActionButton"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svgButton"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItemRedux;
