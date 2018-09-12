import React, {Component} from 'react';
import './Player.css';

class Player extends Component {
  constructor(props){
    super(props)
    this.audioPlayer = React.createRef();
    this.returnShowData = this.returnShowData.bind(this);
  }

  componentDidUpdate(){
    let currentShowName = this.returnShowData();
  }

  returnShowData(){
    let currentShowName = null;
    if (this.props.currentShow !== null){
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
    }
    return currentShowName;
  }

  render(){

    return(
      <React.Fragment>

        <audio ref={this.audioPlayer} id='audioPlayer' controls name="media">
          <source src="http://ehfm.out.airtime.pro:8000/ehfm_a" type="audio/mpeg"/>
        </audio>
        <div className="custom-player">
          <div className="play-button-container">
            <div className='play-button'></div>
          </div>
          <p>Current show: {this.returnShowData()}</p>
        </div>
      </React.Fragment>
    )


  }

}

export default Player;
