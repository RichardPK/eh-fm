import React from 'react';

const Playbutton = (props) => {

  const playClickedWithinPlayButton = function (){
    props.playClicked();
  }

  const renderPlayPause = function(){
    if (props.playingTrueFalse === false) {
      return 'play-button'
    } else {
      return 'pause-button'
    }
  }

  return(
    <div className={renderPlayPause()}
      onClick={playClickedWithinPlayButton}>
    </div>
  )

}

export default Playbutton;
