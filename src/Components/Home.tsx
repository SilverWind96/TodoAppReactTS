import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link className="homeButton" to={`addTask`}>
        Add Task
      </Link>
      <Link className="homeButton" to={`viewTaskList`}>
        View Task List
      </Link>
    </div>
  );
}

export default Home;
