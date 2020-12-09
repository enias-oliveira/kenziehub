import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./modules/users/reducer";

const reducers = combineReducers({
  users: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

// export default store;
