import { TOGGLE_PLAYING } from "../actions/action-types";

const initialState = {
    playing: false,
    volume: true
  };
  function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAYING:
        return {
            ...state,
            playing: action.payload
        };
        default:
        return state;
    }

  };
  export default rootReducer;