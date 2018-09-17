import React, {Component} from 'react';
import Playbutton from './Playbutton'
import Volumebutton from './Volumebutton'
import './Player.css';

class Player extends Component {
  constructor(props){
    super(props)
    this.state = {
      volume: 1.0
    }
    this.returnShowData = this.returnShowData.bind(this);
    this.playClicked = this.playClicked.bind(this);
    this.volumeClicked = this.volumeClicked.bind(this);
  }

  componentDidUpdate(){
  }

  returnShowData(){
    let currentShowName = null;
    if (this.props.currentShow !== null){
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, '\'')
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
      return parsedForAmpersands;
    }
    return currentShowName;
  }

  playClicked(){
    this.props.handlePlayPauseClicked();
  }

  volumeClicked(){
    this.props.handleVolumeClicked();
  }

  render(){

    return(
      <React.Fragment>
        <div className="custom-player">
          <div className="left-side-player">
            <div className="onair-container">
              ON AIR
              <div className="onair-circle">
              </div>
            </div>

            <div className="play-button-container">
              <Playbutton
                playingTrueFalse = {this.props.playing}
                playClicked = {this.playClicked}
              />
            </div>
            <p className="current-show">{this.returnShowData()}</p>
          </div>
          <div className="right-side-player">
            <Volumebutton
              volumeClicked = {this.volumeClicked}
              volume={this.props.volume}/>
            </div>
          </div>
        </React.Fragment>
      )

    }

  }

  export default Player;
