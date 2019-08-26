import { combineReducers } from "redux";
import IndexReducer from "./IndexReducer.js";
import ResidentsReducer from "./ResidentsReducer";

const allReducers = combineReducers({
  index: IndexReducer,
  residents: ResidentsReducer
});

export default allReducers;
