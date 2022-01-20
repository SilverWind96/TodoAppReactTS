import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoApp from "./Components/Basic/TodoApp";
import TodoContextApp from "./Components/Context/TodoContextApp";
import AddTodoRedux from "./Components/ReduxStore/AddTodoRedux";
import HomeRedux from "./Components/ReduxStore/HomeRedux";
import { store } from "./Components/ReduxStore/store/store";
import TodoListRedux from "./Components/ReduxStore/TodoListRedux";
// import TodoReduxApp from "./Components/ReduxStore/TodoReduxApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="basic" element={<TodoApp />} />
        <Route path="context" element={<TodoContextApp />} />
      </Routes>
      <Provider store={store}>
        <Routes>
          <Route path="redux" element={<HomeRedux />} />
          <Route path="redux/addTodo" element={<AddTodoRedux />} />
          <Route path="redux/viewTodoList" element={<TodoListRedux />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
