import { PROFILE } from "./types";

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE:
      state = action.profile;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
