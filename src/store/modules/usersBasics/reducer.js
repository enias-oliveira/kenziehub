import { USER_GET } from "./types";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER_GET:
      return action.list;

    default:
      return state;
  }
};

export default userReducer;
