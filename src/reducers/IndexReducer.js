import { TOGGLE_PLAYING, CHANGE_VOLUME, SET_MIXCLOUD_WIDGET } from "../actions/action-types";

const initialState = {
  playing: false,
  volume: 1,
  mixCloudWidget: null
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.payload
      };
      break;
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
      break;
    case SET_MIXCLOUD_WIDGET:
      return {
        ...state,
        mixCloudWidget: action.payload
      };
    default:
      return state;
  }
}
export default rootReducer;
