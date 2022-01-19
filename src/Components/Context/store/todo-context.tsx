import React, { createContext, useState } from "react";
import { ITodo, status } from "../../Basic/TodoApp";
import { v4 as uuidv4 } from "uuid";

type TodosContextObj = {
  todoList: ITodo[];
  addTodo: (titleInput: string, contentInput: string) => void;
  removeTodo: (id: string | number) => void;
  changeStatusTodo: (status: status, index: number) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  todoList: [],
  addTodo: () => {},
  removeTodo: (id: string | number) => {},
  changeStatusTodo: (status: status, index: number) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddBtn = (titleInput: string, contentInput: string) => {
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
  };

  const statusChangeBtn = (status: status, index: number) => {
    const temp = [...todos];

    temp[index].status = status;

    if (status === "passed") {
      temp[index].finishedDate = new Date().toLocaleString();
    } else {
      temp[index].finishedDate = "";
    }

    setTodos(temp);
  };

  const handleRemoveTodoBtn = (id: string | number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    todoList: todos,
    addTodo: handleAddBtn,
    removeTodo: handleRemoveTodoBtn,
    changeStatusTodo: statusChangeBtn,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
