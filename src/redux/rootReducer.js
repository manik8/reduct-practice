import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import clothReducer from "./cloths/clothReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  cloth: clothReducer,
  user: userReducer,
});

export default rootReducer;
