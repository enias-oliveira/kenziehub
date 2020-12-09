import { USER_BASICS } from "./types";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER_BASICS:
      return [...state, action.list];

    default:
      return state;
  }
};

export default userReducer;
