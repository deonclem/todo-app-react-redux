import React from "react";
import { ITask } from "./reducers";
import { useDispatch } from "react-redux";
import { TOGGLE_TASK } from "./actions";

export interface TaskProps {
  task: ITask;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }: TaskProps) => {
  const dispatch = useDispatch();
  const onTaskChange = () => {
    dispatch({ type: TOGGLE_TASK, payload: index });
  };
  return (
    <div>
      <input
        type="checkbox"
        id={"task" + index.toString()}
        checked={task.done}
        onChange={onTaskChange}
      />
      <label htmlFor={"task" + index.toString()}>{task.label}</label>
    </div>
  );
};

export default Task;
