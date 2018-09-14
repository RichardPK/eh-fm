import React from 'react';

const Volumebutton = (props) => {

  const renderVolume = function(){
    if (props.volume !== 0) {
      return './volume-up-white.png'
    } else {
      return './volume-off-white.png'
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
