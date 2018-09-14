import React, { Component } from 'react';
import './CurrentShowDetail.css';
import Playbutton from './Playbutton';

class CurrentShowDetail extends Component {
  constructor(props){
    super(props);
    this.playClicked = this.playClicked.bind(this)
  }

  returnShowName(){
    let currentShowName = null;
    if (this.props.currentShow !== null){
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
    }
    return currentShowName;
  }

  returnShowImgUrl(){
    let currentShowImgUrl = null;
    if (this.props.currentShow !== null){
      let showData = this.props.currentShow;
      currentShowImgUrl = showData.currentShow[0].image_path;
    }
    if (currentShowImgUrl === ""){
      currentShowImgUrl = "./placeholder-showimg.jpg"
    }
    return currentShowImgUrl;
  }

  returnShowDescription(){
    let currentShowDescription = null;
    if (this.props.currentShow !== null){
      let showData = this.props.currentShow;
      currentShowDescription = showData.currentShow[0].description;
    }
    if (currentShowDescription === ""){
      currentShowDescription = "Georgia Anne Muldrow stops into the LA studio for a one-off show of rare and inspirational grooves ahead of her upcoming album on Brainfeeder."
    }
    return currentShowDescription;
  }

  playClicked(){
    this.props.handlePlayPauseClicked();
  }

  render(){
    return(
      <React.Fragment>

        <div className="currentshow-container">
          <h1 className="currentshow-header">LIVE NOW:</h1>
          <div className="currentshow-sub-container">
            <div className="currentshow-img-container">
              <img className="currentshow-img" src={this.returnShowImgUrl()} alt="current live show"/>
            </div>
            <div className="currentshow-info-container">
              <Playbutton
                playingTrueFalse = {this.props.playing}
                playClicked = {this.playClicked}
              />
              <h3 className="currentshow-show-name"><span>{this.returnShowName()}</span></h3>
              <p className="currentshow-show-description"><span>{this.returnShowDescription()}</span></p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default CurrentShowDetail;
