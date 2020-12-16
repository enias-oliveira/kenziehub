import { createStore, combineReducers } from "redux";

//EXAMPLE
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  //EXAMPLE
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;
