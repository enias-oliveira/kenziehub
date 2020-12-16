import { AUTHENTICATE_TRUE, AUTHENTICATE_FALSE } from "./types";

const authenticateReducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATE_TRUE:
      state = action.authenticatorTrue;
      return state;

    case AUTHENTICATE_FALSE:
      state = action.authenticatorFalse;
      return state;

    default:
      return state;
  }
};

export default authenticateReducer;
