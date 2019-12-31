import React from "react";
import TaskList from "./tasks/TaskList";
import AddTask from "./tasks/AddTask";

const App: React.FC = () => {
  return (
    <div style={{ width: "990px", margin: "auto" }}>
      <TaskList />
      <AddTask />
    </div>
  );
};

export default App;
