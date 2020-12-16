import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./modules/usersBasics/reducer";
import profileReducer from "./modules/profile/reducer";
import authenticateReducer from "./modules/authenticate/reducer";

const reducers = combineReducers({
  users: userReducer,
  profile: profileReducer,
  authenticator: authenticateReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
