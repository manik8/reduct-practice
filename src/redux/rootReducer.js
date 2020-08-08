import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import clothReducer from "./cloths/clothReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  cloth: clothReducer,
});

export default rootReducer;
