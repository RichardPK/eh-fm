import React from 'react';
import Player from '../components/Player';
import NavBar from '../components/NavBar';

const HeaderContainer = (props) => {

  return(
    <React.Fragment>

      <nav className="nav-container">
        <NavBar/>
      </nav>
      <div className="player-container">
        <Player
          currentShow={props.currentShow}
          playing={props.playing}
          volume={props.volume}
          handlePlayPauseClicked = {props.handlePlayPauseClicked}
          handleVolumeClicked = {props.handleVolumeClicked}
        />
      </div>
    </React.Fragment>
  )

}

export default HeaderContainer;
