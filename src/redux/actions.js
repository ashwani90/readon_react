import { ADD_TASK, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTask = content => ({
  type: ADD_TASK,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
