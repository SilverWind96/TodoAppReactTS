import React, { createContext, useState } from "react";
import { status } from "../../Basic/TodoApp";
import { v4 as uuidv4 } from "uuid";
import { ITodoContext } from "../TodoContext";

type TodosContextObj = {
  todoList: ITodoContext[];
  addTodo: (titleInput: string, contentInput: string) => void;
  removeTodo: (id: string | number) => void;
  changeStatusTodo: (status: status, index: number | string) => void;
  modifyTodo: (id: string | number, title: string, content: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  todoList: [],
  addTodo: () => {},
  removeTodo: (id: string | number) => {},
  changeStatusTodo: (status: status, index: number | string) => {},
  modifyTodo: (id: string | number, title: string, content: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<ITodoContext[]>([]);

  const handleAddBtn = (titleInput: string, contentInput: string) => {
    const newId = uuidv4();
    setTodos((prev) => [
      ...prev,
      {
        status: "inprogress",
        id: newId,
        title: titleInput,
        content: contentInput,
        modifiedDate: "",
        createdDate: new Date().toLocaleString(),
        finishedDate: "",
      },
    ]);
  };

  const modifyTodo = (id: number | string, title: string, content: string) => {
    setTodos((prev) => {
      const temp = [...prev];
      const index = temp.findIndex((todo) => todo.id === id);
      temp[index].title = title;
      temp[index].content = content;
      temp[index].status = "inprogress";
      temp[index].modifiedDate = new Date().toLocaleString();
      return temp;
    });
  };

  const statusChangeBtn = (status: status, id: number | string) => {
    setTodos((prev) => {
      const temp = [...prev];
      const index = temp.findIndex((todo) => todo.id === id);
      temp[index].status = status;
      if (status === "passed") {
        temp[index].finishedDate = new Date().toLocaleString();
      } else {
        temp[index].finishedDate = "";
      }
      return temp;
    });
  };

  const handleRemoveTodoBtn = (id: string | number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    todoList: todos,
    addTodo: handleAddBtn,
    removeTodo: handleRemoveTodoBtn,
    changeStatusTodo: statusChangeBtn,
    modifyTodo: modifyTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
