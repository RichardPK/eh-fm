import React, { Component } from 'react';
import styled from 'styled-components';
import Playbutton from './Playbutton/Playbutton';
import Volumebutton from './Volumebutton/Volumebutton';
import './Player.scss';
import Devices from '../../consts/Devices';
import Colors from '../../consts/Colors';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1.0
    };
    this.returnShowData = this.returnShowData.bind(this);
    this.playClicked = this.playClicked.bind(this);
    this.volumeClicked = this.volumeClicked.bind(this);
  }

  componentDidUpdate() {}

  returnShowData() {
    let currentShowName = null;
    if (this.props.currentShow !== null) {
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
      return parsedForAmpersands;
    }
    return currentShowName;
  }

  renderPlayingContainer() {
    if (this.props.playing === true) {
      return 'now-playing-container-white';
    } else {
      return 'now-playing-container';
    }
  }

  playClicked() {
    this.props.handlePlayPauseClicked();
  }

  volumeClicked() {
    this.props.handleVolumeClicked();
  }

  render() {
    return (
      <PlayerWrapper>
        <div className="left-side-player">
          <div className="onair-container">
            ON AIR
            <div className="onair-circle"></div>
          </div>

          <div className={this.renderPlayingContainer()} onClick={this.playClicked}>
            <div className="play-button-container">
              <Playbutton playingTrueFalse={this.props.playing} playClicked={this.playClicked} />
            </div>
            <p className="current-show">{this.returnShowData()}</p>
          </div>
        </div>
        <div className="right-side-player">
          <Volumebutton volumeClicked={this.volumeClicked} volume={this.props.volume} />
        </div>
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
  @media ${Devices.mobileL} {
    padding: 2px 30px 2px 30px;
  }
`;

export default Player;
