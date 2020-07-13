import React, { Component } from 'react';
import styled from 'styled-components/macro';
import CurrentShow from '../current-show/CurrentShow';
import Player from './player/Player';
import Logo from '../nav-bar/logo/Logo';
import Devices from '../../consts/Devices';
import Colors from '../../consts/Colors';

class SidePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1.0
    };
  }

  componentDidUpdate() {}

  render() {
    return (
      <SidePlayerOuter>
        <Logo />
        <CurrentShowWrapper>
          <CurrentShow
            currentShow={this.props.currentShow}
            residents={this.props.residents}
            playing={this.props.playing}
            handlePlayPauseClicked={this.props.handlePlayPauseClicked}
          />
        </CurrentShowWrapper>
        <PlayerWrapper>
          <Player
            playing={this.props.playing}
            handlePlayPauseClicked={this.props.handlePlayPauseClicked}
            currentShow={this.props.currentShow}
            volumeClicked={this.props.handleVolumeClicked}
            volume={this.props.volume}
          />
        </PlayerWrapper>
      </SidePlayerOuter>
    );
  }
}

const SidePlayerOuter = styled.div`
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: ${Colors.ehfmPrimary};
  padding-top: 2rem;
  width: 350px;
`;

const CurrentShowWrapper = styled.div`
  position: relative;
  padding: 1rem 0.5rem 0.5rem;
`;

const PlayerWrapper = styled.div`
  background-color: ${Colors.ehfmPrimary};
  padding: 2px 20px 2px 20px;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${Devices.mobileL} {
    padding: 2px 30px 2px 30px;
  }
`;

export default SidePlayer;
