import React from 'react';

const Volumebutton = (props) => {

  const renderVolume = function(){
    if (props.volume !== 0) {
      return 'https://www.ehfm.live/volume-up-white.png'
    } else {
      return 'https://www.ehfm.live/volume-off-white.png'
    }
  }

  return(
    <div className="volume-button-container">
      <img className="volume-button"
        src={renderVolume()}
        onClick={props.volumeClicked}
        alt='volume icon'></img>
      </div>
    )

  }

  export default Volumebutton;
