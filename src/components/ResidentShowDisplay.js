import React, {Component} from "react";
import "./ResidentShowDisplay.scss";

class ResidentShowDisplay extends Component {
  constructor(props){
    super(props);
    this.timeSpan = React.createRef();
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
