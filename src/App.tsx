import "./App.css";
import TodoApp from "./Components/Basic/TodoApp";
import TodoContextApp from "./Components/Context/TodoContextApp";
import TodoReduxApp from "./Components/ReduxStore/TodoReduxApp";

function App() {
  return (
    <>
      {/* <TodoApp /> */}
      <TodoContextApp />
      {/* <TodoReduxApp /> */}
    </>
  );
}

export default App;
