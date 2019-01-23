import { combineReducers } from "redux";
import IndexReducer from "./IndexReducer.js";

const allReducers = combineReducers({
  index: IndexReducer
});

export default allReducers;
