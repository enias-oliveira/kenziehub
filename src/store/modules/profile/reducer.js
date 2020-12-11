import { PROFILE } from "./types";

const profileReducer = (state = {}, action) => {
  //   console.log("Action: ", action.profile);
  //   console.log("StateReducer: ", state);
  switch (action.type) {
    case PROFILE:
      state = action.profile;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
