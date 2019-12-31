import { combineReducers } from "redux";
import tasksReducer from "./tasks/reducers";

export interface Action {
  type: string;
  payload: any;
}

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default rootReducer;
