import { TOGGLE_PLAYING, CHANGE_VOLUME, SET_MIXCLOUD_WIDGET } from "./action-types";


const Actions = {

  switchPlaying: toggle => dispatch => {
    dispatch({
      type: TOGGLE_PLAYING,
      payload: toggle
    });
  },

  switchVolume: value => dispatch => {
    dispatch({
      type: CHANGE_VOLUME,
      payload: value
    });
  },

  setMixcloudWidget: value => dispatch => {
    dispatch({
      type: SET_MIXCLOUD_WIDGET,
      payload: value
    });
  },
  
  
  
}

  export default Actions;