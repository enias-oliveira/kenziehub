import { createStore, combineReducers } from "redux";

<<<<<<< HEAD
//EXAMPLE
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  //EXAMPLE
  cart: cartReducer,
=======
import userReducer from "./modules/usersBasics/reducer";
import profileReducer from "./modules/profile/reducer";
import authenticateReducer from "./modules/authenticate/reducer";

const reducers = combineReducers({
  users: userReducer,
  profile: profileReducer,
  authenticator: authenticateReducer,
>>>>>>> develop
});

const store = createStore(reducers);

export default store;
