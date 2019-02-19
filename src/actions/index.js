import { TOGGLE_PLAYING } from "./action-types";


const Actions = {

  switchPlaying: toggle => dispatch => {
    dispatch({
      type: TOGGLE_PLAYING,
      payload: toggle
    });
  }
  
}

  export default Actions;