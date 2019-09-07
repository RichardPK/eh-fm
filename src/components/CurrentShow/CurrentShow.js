import React, { Component } from "react";
import "./CurrentShow.scss";
import Playbutton from "../Player/Playbutton/Playbutton";

class CurrentShowDetail extends Component {
  constructor(props) {
    super(props);
    this.playClicked = this.playClicked.bind(this);
    this.renderPlayingContainer = this.renderPlayingContainer.bind(this);
    this.findShowUrlInPrismic = this.findShowUrlInPrismic.bind(this);
  }

  returnShowName() {
    let currentShowName = null;
    if (this.props.currentShow !== null) {
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
      return parsedForAmpersands;
    }
    return currentShowName;
  }

  findShowUrlInPrismic() {
    let result;
    const currentShowName = this.returnShowName();
    if (this.props.residents && currentShowName) {
      const filtered = this.props.residents.filter((resident) => currentShowName.includes(resident.data.show_title));
      if (filtered.length > 0) {
        result = filtered[0].data.show_image.larger.url;
      }
    }

    return result;
  }

  returnShowImgUrl() {
    let linkedPrismicImg = this.findShowUrlInPrismic();

    if (linkedPrismicImg) {
      return linkedPrismicImg;
    } else {
      let currentShowImgUrl = null;
      if (this.props.currentShow !== null) {
        let showData = this.props.currentShow;
        currentShowImgUrl = showData.currentShow[0].image_path;
      }
      if (currentShowImgUrl === "") {
        currentShowImgUrl = "./placeholder-showimg.jpg";
      }
      return currentShowImgUrl;
    }
  }

  returnShowDescription() {
    let currentShowDescription = null;
    if (this.props.currentShow !== null) {
      let showData = this.props.currentShow;
      currentShowDescription = showData.currentShow[0].description;
      if (currentShowDescription === "") {
        currentShowDescription = "Independent community radio for Edinburgh.";
        return currentShowDescription;
      } else {
        let parsedForInvertedCommas = currentShowDescription.replace(/&#039;/g, "'");
        let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
        return parsedForAmpersands;
      }
    }
  }

  renderPlayingContainer() {
    if (this.props.playing === true) {
      return "currentshow-playbutton-container-white";
    } else {
      return "currentshow-playbutton-container";
    }
  }

  playClicked() {
    this.props.handlePlayPauseClicked();
  }

  render() {
    return (
      <React.Fragment>
        <div className="currentshow-container">
          <h1 className="currentshow-header">Live now</h1>
          <div className="currentshow-sub-container">
            <div className="currentshow-img-container">
              <img className="currentshow-img" src={this.returnShowImgUrl()} alt="current live show" />
            </div>
            <div className="currentshow-info-container">
              <h3 className="currentshow-show-name">
                <span>{this.returnShowName()}</span>
              </h3>
              <div className={this.renderPlayingContainer()} onClick={this.playClicked}>
                <p>Listen now</p>
                <Playbutton playingTrueFalse={this.props.playing} playClicked={this.playClicked} />
              </div>

              <p className="currentshow-show-description">
                <span>{this.returnShowDescription()}</span>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CurrentShowDetail;
