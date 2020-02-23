import React from "react";

const VolumeButton = props => (
  <div className="volume-button-container">
    <img
      className="volume-button"
      src={
        props.volume === 0
          ? `https://www.ehfm.live/volume-off-white.png`
          : `https://www.ehfm.live/volume-up-white.png`
      }
      onClick={props.volumeClicked}
      alt="volume control"
    ></img>
  </div>
);

export default VolumeButton;
