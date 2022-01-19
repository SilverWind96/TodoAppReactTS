import React, { SyntheticEvent, useState } from "react";
// import Todo from "./Basic/Todo";
type status = "inprogress" | "passed" | "failed";
interface ITodo {
  id: string | number;
  title: string;
  content: string;
  createdDate: string;
  finishedDate: string;
  status: status;
}
function TaskList() {
  //   const [todos, setTodos] = useState<ITodo[]>([]);
  //   const onStatusChange = (status: status, index: number) => {
  //     const temp = [...todos];
  //     temp[index].status = status;
  //     if (status === "passed") {
  //       temp[index].finishedDate = new Date().toLocaleString();
  //     } else {
  //       temp[index].finishedDate = "";
  //     }
  //     setTodos(temp);
  //   };
  //   const onClose = (e: SyntheticEvent, index: number) => {
  //     // e.stopPropagation();
  //     const temp = [...todos];
  //     temp.splice(index, 1);
  //     setTodos(temp);
  //   };
  //   return (
  //     <ul id="myUL" className="flex flex-col items-center">
  //       {todos.map((todo: ITodo, index: number) => (
  //         <Todo
  //           key={index}
  //           todo={todo}
  //           onClose={onClose}
  //           index={index}
  //           onStatusChange={onStatusChange}
  //         />
  //       ))}
  //     </ul>
  //   );
}

export default TaskList;
