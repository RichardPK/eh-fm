import React, {Component} from 'react';
import Playbutton from './Playbutton'
import './Player.css';

class Player extends Component {
  constructor(props){
    super(props)
    this.state = {
      playing: false,
      volume: 1.0
    }
    this.audioPlayer = React.createRef();
    this.returnShowData = this.returnShowData.bind(this);
    this.playClicked = this.playClicked.bind(this);
    this.volumeClicked = this.volumeClicked.bind(this);
    this.renderVolume = this.renderVolume.bind(this);
  }

  componentDidUpdate(){
  }

  returnShowData(){
    let currentShowName = null;
    if (this.props.currentShow !== null){
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
    }
    return currentShowName;
  }

  playClicked(){
    if (this.state.playing === false) {
      this.setState({playing: true}, function(){
        this.audioPlayer.current.play();
      })
    } else {
      this.setState({playing: false}, function(){
        this.audioPlayer.current.pause();
      })
    }
    this.props.listenNowClicked();
  }

  volumeClicked(){
    if (this.state.volume !== 0){
      this.setState({volume: 0}, function(){
        this.audioPlayer.current.volume = 0;
      })
    } else {
      this.setState({volume: 1}, function(){
        this.audioPlayer.current.volume = 1;
      })
    }
  }

  renderVolume(){
    if (this.state.volume !== 0) {
      return './volume-up-white.png'
    } else {
      return './volume-off-white.png'
    }
  }

  render(){

    return(
      <React.Fragment>

        <audio ref={this.audioPlayer} id='audioPlayer' name="media">
          <source src="http://ehfm.out.airtime.pro:8000/ehfm_a" type="audio/mpeg"/>
        </audio>
        <div className="custom-player">
          <div className="left-side-player">
            <div className="onair-container">
              ON AIR
              <div className="onair-circle">
              </div>
            </div>

            <div className="play-button-container">
              <Playbutton
                playingTrueFalse = {this.state.playing}
                playClicked = {this.playClicked}
              />
            </div>
            <p className="current-show">{this.returnShowData()}</p>
          </div>

          <div className="right-side-player">
            <div className="volume-button-container">
              <img className="volume-button"
                src={this.renderVolume()}
                onClick={this.volumeClicked}
                alt='volume icon'></img>
              </div>
            </div>
          </div>
        </React.Fragment>
      )

    }

  }

  export default Player;
