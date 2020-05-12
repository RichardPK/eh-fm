import React, { Component } from 'react';
import styled from 'styled-components/macro';
import VolumeButton from './volume-button/VolumeButton';
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
          <VolumeButton volumeClicked={this.props.handleVolumeClicked} volume={this.props.volume} />
        </Right>
      </PlayerWrapper>
    );
  }
}

const PlayerWrapper = styled.div`
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
