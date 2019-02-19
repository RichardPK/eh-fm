import { TOGGLE_PLAYING, CHANGE_VOLUME } from "../actions/action-types";

const initialState = {
    playing: false,
    volume: 0
  };
  function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAYING:
        return {
            ...state,
            playing: action.payload
        };
        break
        case CHANGE_VOLUME:
        return {
          ...state,
          volume: action.payload
        }
        default:
        return state;
    }

  };
  export default rootReducer;