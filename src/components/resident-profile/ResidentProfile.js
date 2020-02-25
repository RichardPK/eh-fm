import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./ResidentProfile.scss";
import styled from "styled-components";
import renderHTML from "react-render-html";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import IndexActions from "../../actions/index";
import ProfileText from "./profile-text/ProfileText";
import PastShowCard from "./past-show-card/PastShowCard";
import MostRecentShowbutton from "./most-recent-show-button/MostRecentShowButton";
import ArchiveButton from "./archive-button/ArchiveButton";

class ResidentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mixCloudWidget: null,
      displayShows: false,
      orderedShows: null,
      mostRecentShow: null
    };
    this.renderPastShows = this.renderPastShows.bind(this);
    this.mapPastShows = this.mapPastShows.bind(this);
    this.handleArchiveButtonClick = this.handleArchiveButtonClick.bind(this);
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
    this.renderCardContainerMargin = this.renderCardContainerMargin.bind(this);
    this.getMostRecentShow = this.getMostRecentShow.bind(this);
    this.renderShowName = this.renderShowName.bind(this);
    this.renderDate = this.renderDate.bind(this);
  }

  componentDidUpdate() {
    this.props.pastShows && !this.state.mostRecentShow
      ? this.getMostRecentShow()
      : null;
  }

  renderPastShows() {
    if (this.props.pastShows) {
      let fullShowDisplay = this.mapPastShows();

      if (this.state.displayShows === true) {
        return (
          <div className="resident-show-pastshows-container">
            {/* <div className="most-recent">{mostRecentShow}</div> */}
            <div
              className="cards-container"
              style={this.renderCardContainerMargin()}
            >
              {fullShowDisplay}
            </div>
          </div>
        );
      } else {
        // return (
        //   <div className="resident-show-pastshows-container">
        //     <div className="most-recent">{mostRecentShow}</div>
        //   </div>
        // );
      }
    }
  }

  getMostRecentShow() {
    let arrayWithModifiedTimestamps = this.props.pastShows.map(show => {
      show.created_timestamp = Date.parse(show.created_time);
      return show;
    });

    let orderedByTimestamp = arrayWithModifiedTimestamps.sort(
      (showA, showB) => {
        return showA.created_timestamp + showB.created_timestamp;
      }
    );

    if (orderedByTimestamp.length > 0) {
      this.setState({
        orderedShows: orderedByTimestamp,
        mostRecentShow: orderedByTimestamp[0]
      });
    } else {
      this.setState({
        mostRecentShow: "none"
      });
    }
  }

  renderShowName = showName => {
    if (showName.includes("-")) {
      let name = showName.split(" - ")[0].trim();
      return name;
    } else {
      return showName;
    }
  };

  renderDate = showName => {
    let dateToReturn = "";
    if (showName.includes("-")) {
      let date = showName.split(" - ")[1];
      if (date) {
        dateToReturn = date.trim();
      }
      return dateToReturn;
    } else {
      return;
    }
  };

  mapPastShows() {
    let showDisplay = this.props.pastShows.map(show => {
      let tags = show.tags.map(tag => {
        return (
          <div className="mixcloud-tag" key={tag.url}>
            <span>{tag.name}</span>
          </div>
        );
      });
      return (
        <PastShowCard
          handleMixCloudClick={e => this.handleMixCloudClick(show)}
          key={this.props.pastShows.indexOf(show)}
          renderDate={this.renderDate(show.name)}
          renderShowName={this.renderShowName(show.name)}
          tags={tags}
        />
      );
    });
    showDisplay.splice(0, 1);
    return showDisplay;
  }

  handleArchiveButtonClick() {
    if (this.state.displayShows === true) {
      scroll.scrollTo(0);
      Events.scrollEvent.register(
        "end",
        function() {
          console.log("End");
          this.setState({ displayShows: false });
        }.bind(this)
      );
    } else {
      Events.scrollEvent.remove("end");
      this.setState({ displayShows: true }, scroll.scrollTo(200));
    }
  }

  renderCardContainerMargin() {
    if (this.props.mixCloudWidget) {
      return {
        marginBottom: "123px"
      };
    } else {
      return null;
    }
  }

  handleMixCloudClick(show) {
    debugger;
    let url = `https://api.mixcloud.com${show.key}embed-json/`;
    axios.get(url).then(res => {
      this.props.setMixcloudWidget(res.data.html);
    });
  }

  render() {
    return (
      <React.Fragment>
        <BackgroundImage
          mixCloudWidget={this.props.mixCloudWidget}
          showImage={this.props.showImage}
        />
        <div className="resident-show-display-container">
          <ProfileText props={this.props} />
          {this.props.pastShows && this.state.orderedShows && (
            <React.Fragment>
              <MostRecentShowbutton
                mostRecentShow={this.state.mostRecentShow}
                handleMostRecentShowButtonClick={this.handleMixCloudClick}
                date={this.renderDate(this.state.mostRecentShow.name)}
                showName={this.renderShowName(this.state.mostRecentShow.name)}
              />
              <ArchiveButton
                handleArchiveButtonClick={this.handleArchiveButtonClick}
                displayShows={this.state.displayShows}
              />
            </React.Fragment>
          )}

          {this.renderPastShows()}
        </div>
      </React.Fragment>
    );
  }
}

const BackgroundImage = styled.div`
  background-position: center center !important;
  background-size: cover !important;
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: -100;
  top: 100px;
  left: 0;
  margin-bottom: ${props => (props.mixCloudWidget ? "123px" : "0")};
  background-image: url(${props => props.showImage});

  img {
    max-width: 100%;
    margin: auto;
  }
`;

const mapStateToProps = state => {
  return {
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlaying: toggle => {
      dispatch(IndexActions.switchPlaying(toggle));
    },
    changeVolume: value => {
      dispatch(IndexActions.switchVolume(value));
    },
    setMixcloudWidget: value => {
      dispatch(IndexActions.setMixcloudWidget(value));
    }
  };
};

const Index = connect(mapStateToProps, mapDispatchToProps)(ResidentProfile);
export default Index;
