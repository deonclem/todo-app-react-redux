import { ADD_TASK, TOGGLE_TASK } from "./actions";
import { Action } from "../reducers";

export interface TasksReducerState {
  tasks: Array<ITask>;
}

export interface ITask {
  label: string;
  done?: boolean;
}

const initialState: TasksReducerState = {
  tasks: []
};

const tasksReducer = (state = initialState, { type, payload }: Action) => {
  if (type === ADD_TASK) {
    const task: ITask = { label: payload, done: false };
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
