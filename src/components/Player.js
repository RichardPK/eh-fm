import React, {Component} from 'react';
import './Player.css';

class Player extends Component {
  constructor(props){
    super(props)
    this.audioPlayer = React.createRef();
  }

  componentDidMount(){
    console.log(this.audioPlayer);
  }

  render(){

    return(
      <React.Fragment>
        <audio ref={this.audioPlayer} id='audioPlayer' controls name="media">
          <source src="http://ehfm.out.airtime.pro:8000/ehfm_a" type="audio/mpeg"/>
        </audio>
      </React.Fragment>
    )


  }

}

export default Player;
