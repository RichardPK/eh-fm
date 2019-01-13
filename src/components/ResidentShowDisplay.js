import React, {Component} from "react";
import "./ResidentShowDisplay.scss";

class ResidentShowDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMixcloudShow: null
    }
    this.timeSpan = React.createRef();
    this.renderFacebook = this.renderFacebook.bind(this);
    this.renderTwitter = this.renderTwitter.bind(this);
    this.renderInstagram = this.renderInstagram.bind(this);
    this.renderShowTime = this.renderShowTime.bind(this);
    this.renderMixCloud = this.renderMixCloud.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
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

  renderMixCloud() {

    if (this.props.pastShows) {

      let showDisplay = this.props.pastShows.map(show => {
        return (
        <div
          className="resident-pastshow-card"
          onClick={this.handleMixCloudClick}
          key={this.props.pastShows.indexOf(show)}>
          <span className="resident-mixcloud-showname">{show.name}</span>
          <span className="resident-mixcloud-date">{this.renderDate(show.created_time)}</span>
        </div>)
      })

      return showDisplay;

    }
  }

  renderDate(date){
    let cutDate = date.slice(2, 10);
    let splitDate = cutDate.split("-");

    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];

    let finalDate = `${day}.${month}.${year}`
    return finalDate;
  }

  handleMixCloudClick() {
    console.log("clicked");
  }

  // calculateDividerWidth() {
  //   if (this.timeSpan.current) {
  //     return this.timeSpan.current.offsetWidth
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <div className="resident-show-bg-img" style={{ backgroundImage: `url(${this.props.showImage})` }} />
        {/* <img src={this.props.showImage} alt={this.props.showTitle} /> */}
        {/* </div> */}

        <div className="resident-show-display-container">

          <div className="resident-show-title-container">

            <h3>
              <span>{this.props.showTitle}</span>
            </h3>
            {this.renderShowTime()}

            {/* <div className="resident-show-divider" style={{ "width": this.calculateDividerWidth() }} /> */}
          </div>


          <div className="resident-show-display-description">


            <p>
              <span>{this.props.showDescription}</span>
            </p>
            </div>

          <div className="resident-show-pastshows-container">
            {this.renderMixCloud()}
          </div>
        
          <div className="resident-show-footer">
            <div className="resident-show-socials">
              {this.renderFacebook()}
              {this.renderTwitter()}
              {this.renderInstagram()}
            </div>

          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default ResidentShowDisplay;
