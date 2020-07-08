import React, { Component } from 'react';
import styled from 'styled-components/macro';
import CurrentShow from '../current-show/CurrentShow';
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
        <CurrentShowWrapper>
          <CurrentShow
            currentShow={this.props.currentShow}
            residents={this.props.residents}
            playing={this.props.playing}
            handlePlayPauseClicked={this.props.handlePlayPauseClicked}
          />
        </CurrentShowWrapper>
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
  z-index: 3;
  background-color: ${Colors.playerWhite};
  display: flex;
  flex-direction: column;
  align-items: center;

  /* ABOVE VALUE WIP */
`;

const HeaderLogoWrapper = styled.div`
  @media ${Devices.tablet} {
  }
`;

const CurrentShowWrapper = styled.div`
  position: relative;
  width: 375px;
  margin-bottom: 5px;
  padding: 5px;
`;

const PlayerWrapper = styled.div`
  height: 100vh;
  background-color: ${Colors.playerWhite};
  padding: 2px 20px 2px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${Devices.mobileL} {
    padding: 2px 30px 2px 30px;
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
