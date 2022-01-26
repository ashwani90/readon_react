import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import tasks from "./tasks";

export default combineReducers({ tasks, visibilityFilter });
