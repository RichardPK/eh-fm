import { GET_RESIDENTS } from "../actions/action-types";

const initialState = {
  // residents: null
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESIDENTS:
      return action.payload;
    default:
      return state;
  }
}
export default rootReducer;
