import { ADD_TASK, TOGGLE_TASK } from "./actions";
import { Action } from "../reducers";
import dayjs from "dayjs";

export interface TasksReducerState {
  tasks: Array<ITask>;
}

export interface ITask {
  label: string;
  createdAt: string;
  done?: boolean;
}

const initialState: TasksReducerState = {
  tasks: [
    {
      label: "Check me!",
      createdAt: dayjs().format("dddd, MMMM D YYYY, h:mm:ss a")
    }
  ]
};

const tasksReducer = (state = initialState, { type, payload }: Action) => {
  if (type === ADD_TASK) {
    const task: ITask = {
      label: payload,
      done: false,
      createdAt: dayjs().format("dddd, MMMM D YYYY, h:mm:ss a")
    };
    const tasks = state.tasks.concat(task);
    return { ...state, tasks };
  }
  if (type === TOGGLE_TASK) {
    state.tasks.forEach((t, i) => {
      if (payload === i) {
        t.done = !t.done;
      }
    });
    return { ...state };
  }
  return state;
};

export default tasksReducer;
