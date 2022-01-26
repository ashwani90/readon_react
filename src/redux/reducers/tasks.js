import { ADD_TASK } from "../actionTypes";

const initialState = {
  tasks: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { id, content } = action.payload;
      return {
        ...state,
        tasks: [],
      };
    }
    default:
      return state;
  }
}
