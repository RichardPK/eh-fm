import { TOGGLE_PLAYING, CHANGE_VOLUME } from "./action-types";


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
  }  
  
}

  export default Actions;