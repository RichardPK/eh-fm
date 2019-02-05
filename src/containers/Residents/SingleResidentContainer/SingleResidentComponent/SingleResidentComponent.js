import React, { Component } from "react";
import axios from 'axios';
import "./SingleResidentComponent.scss";
import renderHTML from 'react-render-html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons'

class ResidentShowDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mixCloudWidget: null,
      displayShows: false
    }
    this.timeSpan = React.createRef();
    this.showDescription = React.createRef();
    this.renderFacebook = this.renderFacebook.bind(this);
    this.renderTwitter = this.renderTwitter.bind(this);
    this.renderInstagram = this.renderInstagram.bind(this);
    this.renderShowTime = this.renderShowTime.bind(this);
    this.renderPastShows = this.renderPastShows.bind(this);
    this.mapPastShows = this.mapPastShows.bind(this);
    this.toggleArchiveclick = this.toggleArchiveclick.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.renderShowName = this.renderShowName.bind(this);
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
    this.renderCardContainerMargin = this.renderCardContainerMargin.bind(this);
  }

  renderFacebook() {
    if (this.props.facebook) {
      return (
        <div className="social-icon">
          <a href={this.props.facebook} target="blank">
            <img src="/facebook-white.png" alt="facebook page" />
          </a>
        </div>
      )
    }
  }

  renderTwitter() {
    if (this.props.twitter) {
      return (
        <div className="social-icon">
          <a href={this.props.twitter} target="blank">
            <img src="/twitter-white.png" alt="twitter profile" />
          </a>
        </div>
      )
    }
  }

  renderInstagram() {
    if (this.props.instagram) {
      return (
        <div className="social-icon">
          <a href={this.props.instagram} target="blank">
            <img src="/instagram-white.png" alt="instagram profile" />
          </a>
        </div>
      )
    }
  }

  renderShowTime() {

    if (this.props.showTime) {

      return (
        <div className="resident-show-time" >
          <span ref={this.timeSpan}>{this.props.showTime}</span>
        </div>
      )
    }
  }

  renderPastShows() {

    if (this.props.pastShows) {

      let displayHeight = this.showDescription.current.offsetTop;
      let showDisplay = this.mapPastShows();

      if (this.state.displayShows === true){
        return (
          <div 
          className="resident-show-pastshows-container"
          // style={{top: `${displayHeight}px`}}
          >
          <div className="pastshows-button active">
            <h1 onClick={this.toggleArchiveclick}>Archive</h1>
            <FontAwesomeIcon icon={faChevronDown} 
            className="down"/>
            </div>
            <div className="cards-container"
              style={this.renderCardContainerMargin()} >
              {showDisplay}
            </div>
          </div>
        )
      } else {
        return (
          <div 
          className="resident-show-pastshows-container"
          // style={{top: `${displayHeight}px`}}
          >
          <div className="pastshows-button">
            <h1 onClick={this.toggleArchiveclick}>Archive</h1>
            <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        )
      }

    }
  }

  mapPastShows(){
    let showDisplay = this.props.pastShows.map(show => {
      let tags = show.tags.map(tag => {
        return (
          <div className="mixcloud-tag"
            key={tag.url}>
            <span>{tag.name}</span>
          </div>
        )
      })
      return (
        <div
          className="resident-pastshow-card"
          onClick={e => this.handleMixCloudClick(show)}
          key={this.props.pastShows.indexOf(show)}>
          {/* <div className="show-img"
        style={{ backgroundImage: `url(${show.pictures.large})` }}>
        </div> */}
          <div className="showname-info-cont">
            <span className="resident-mixcloud-date">{this.renderDate(show.name)}</span>
            <span className="resident-mixcloud-showname">{this.renderShowName(show.name)}</span>
            <div className="resident-mixcloud-tags-container">{tags}</div>
          </div>
        </div>)
    })
    return showDisplay
  }

  toggleArchiveclick(){   
    if (this.state.displayShows === true){
      this.setState({displayShows: false}
      )
    } else {
      this.setState({displayShows: true})
    }
  }

  renderCardContainerMargin() {
    if (this.state.mixCloudWidget) {
      return ({
        marginBottom: '123px'
      })
    } else {
      return null;
    }
  }

  renderShowName(showName) {
    let name = showName.split("-")[0].trim();
    return name;
  }

  renderDate(showName) {
    let date = showName.split("-")[1].trim();
    return date;
  }

  handleMixCloudClick(show) {
    let url = `https://api.mixcloud.com${show.key}embed-json/`;
    axios.get(url)
      .then(res => {
        this.setState({ mixCloudWidget: res.data.html });
      })
  }

  renderMixCloudPlayer() {

    if (this.state.mixCloudWidget) {
      return (
        <div className="mixcloud-cont">
          <div className="close-player-btn"
            onClick={() => {
              this.setState({ mixCloudWidget: null })
            }}>
            <span>x</span>
          </div>
          <div className="resident-mixcloud-widget">
            {renderHTML(this.state.mixCloudWidget)}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="resident-show-bg-img"
          style={{ backgroundImage: `url(${this.props.showImage})` }}
        />

        <div className="resident-show-display-container">

          <div className="resident-show-title-container">

            <h3>
              <span>{this.props.showTitle}</span>
            </h3>
            {this.renderShowTime()}

            {/* <div className="resident-show-divider" style={{ "width": this.calculateDividerWidth() }} /> */}
          </div>


          <div className="resident-show-display-description"
            ref={this.showDescription}>


            <p>
              <span>{this.props.showDescription}</span>
            </p>
          </div>

            <div className="resident-show-socials">
              {this.renderFacebook()}
              {this.renderTwitter()}
              {this.renderInstagram()}
            </div>

          {this.renderPastShows()}
          
        </div>
     
        {this.renderMixCloudPlayer()}
      </React.Fragment >
    )
  }
}

export default ResidentShowDisplay;
