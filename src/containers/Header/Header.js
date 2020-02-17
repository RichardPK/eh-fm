import React from 'react';
import styled from 'styled-components';
import Player from '../../components/Player/Player';
import NavBar from '../../components/NavBar/NavBar';
import Devices from '../../consts/Devices';

const HeaderContainer = (props) => {
  return (
    <React.Fragment>
      <nav className="nav-container">
        <NavBar />
      </nav>
      <PlayerOuter>
        <Player
          key={props.playing}
          currentShow={props.currentShow}
          playing={props.playing}
          volume={props.volume}
          handlePlayPauseClicked={props.handlePlayPauseClicked}
          handleVolumeClicked={props.handleVolumeClicked}
        />
      </PlayerOuter>
    </React.Fragment>
  );
};

const PlayerOuter = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
  top: 114px;

  @media ${Devices.tablet} {
    top: 86px;
  }
`;

export default HeaderContainer;
