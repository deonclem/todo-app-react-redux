import React from "react";
import { useSelector } from "react-redux";
import { TasksReducerState } from "./reducers";
import Task from "./Task";

const TaskList = () => {
  const tasksState = useSelector<any, TasksReducerState>(state => state.tasks);

  return (
    <div>
      {tasksState.tasks.map((t, i) => (
        <div key={i}>
          <Task index={i} task={t}></Task>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
