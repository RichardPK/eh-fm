import React, { Component } from 'react';
import styled from 'styled-components';
import Playbutton from './Playbutton/Playbutton';
import Volumebutton from './Volumebutton/Volumebutton';
import './Player.scss';
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
          <Volumebutton volumeClicked={this.props.handleVolumeClicked} volume={this.props.volume} />
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  margin: 0px 0px 0px auto;
  align-items: center;
  justify-content: center;
`;

export default Player;
