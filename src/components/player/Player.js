import React, { Component } from 'react';
import styled from 'styled-components/macro';
import VolumeButton from './volume-button/VolumeButton';
import Logo from '../nav-bar/logo/Logo';
import Devices from '../../consts/Devices';
import Colors from '../../consts/Colors';
import OnAir from './on-air/OnAir';
import NowPlaying from './now-playing/NowPlaying';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1.0
    };
  }

  componentDidUpdate() {}

  render() {
    return (
      <PlayerOuter>
        <HeaderLogoWrapper>
          <Logo />
        </HeaderLogoWrapper>
        <PlayerWrapper>
          <Left>
            <OnAir />
            <NowPlaying
              playing={this.props.playing}
              handlePlayPauseClicked={this.props.handlePlayPauseClicked}
              currentShow={this.props.currentShow}
            />
          </Left>
          <Right>
            <VolumeButton
              volumeClicked={this.props.handleVolumeClicked}
              volume={this.props.volume}
            />
          </Right>
        </PlayerWrapper>
      </PlayerOuter>
    );
  }
}

const PlayerOuter = styled.div`
  position: fixed;
  z-index: 3;
  width: 375px;
  /* ABOVE VALUE WIP */

  @media ${Devices.tablet} {
    top: 0;
  }
`;

const PlayerWrapper = styled.div`
  height: 100vh;
  background-color: ${Colors.ehfmPrimary};
  padding: 2px 20px 2px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${Devices.mobileL} {
    padding: 2px 30px 2px 30px;
  }
`;

const HeaderLogoWrapper = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -70px;
  padding-left: 50vw;
  padding-right: 50vw;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: white;

  @media ${Devices.tablet} {
    top: 0px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Player;
