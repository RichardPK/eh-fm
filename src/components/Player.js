import React from 'react';
import './Player.css';

const Player = (props) => {


  return(
    <React.Fragment>
      <audio controls name="media">
        <source src="http://ehfm.out.airtime.pro:8000/ehfm_a" type="audio/mpeg"/>
      </audio>
    </React.Fragment>
  )

}

export default Player;
