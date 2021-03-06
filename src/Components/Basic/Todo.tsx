import React, { SyntheticEvent } from "react";

type status = "inprogress" | "passed" | "failed";

type ITodo = {
  id: string | number;
  title: string;
  content: string;
  createdDate: string;
  finishedDate: string;
  status: status;
};

type Props = {
  todo: ITodo;
  onClose: (e: SyntheticEvent, index: number) => void;
  index: number;
  onStatusChange: (e: status, index: number) => void;
};

const Todo: React.FC<Props> = ({ todo, onClose, index, onStatusChange }) => {
  return (
    <li
      key={index}
      className={`flex ${todo.status === "passed" ? "passed" : ""} ${
        todo.status === "failed" ? "failed" : ""
      }`}
    >
      <div className="w-90">
        <h2>{todo.title}</h2>
        <p className="content">{todo.content}</p>
        <div className="flex justify-between">
          <p className="w-45 date">Created Date: {todo.createdDate}</p>
          <p className="w-45 date">
            {todo.finishedDate && <>Finished Date: {todo.finishedDate}</>}
          </p>
          <div className="flex w-10">
            {todo.status !== "passed" && (
              <button
                className="todoActionButton"
                onClick={() => onStatusChange("passed", index)}
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
                onClick={() => onStatusChange("failed", index)}
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
        <button className="todoActionButton" onClick={(e) => onClose(e, index)}>
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

export default Todo;
