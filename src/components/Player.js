import React, {Component} from 'react';
import './Player.css';

class Player extends Component {
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }
    this.audioPlayer = React.createRef();
    this.returnShowData = this.returnShowData.bind(this);
    this.playClicked = this.playClicked.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
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
  }

  renderPlayPause(){
    if (this.state.playing === false) {
      return 'play-button'
    } else {
      return 'pause-button'
    }
  }

  render(){

    return(
      <React.Fragment>

        <audio ref={this.audioPlayer} id='audioPlayer' controls name="media">
          <source src="http://ehfm.out.airtime.pro:8000/ehfm_a" type="audio/mpeg"/>
        </audio>
        <div className="custom-player">
          <div className="play-button-container">
            <div className={this.renderPlayPause()} onClick={this.playClicked}></div>
          </div>
          <p className="current-show">Current show: {this.returnShowData()}</p>
        </div>
      </React.Fragment>
    )


  }

}

export default Player;
