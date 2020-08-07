import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Devices from "../../consts/Devices";
import styled from "styled-components/macro";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { withCookies } from "react-cookie";
import IndexActions from "../../actions/index";
import ProfileText from "./profile-text/ProfileText";
import PastShowCard from "./past-show-card/PastShowCard";
import MostRecentShowbutton from "./most-recent-show-button/MostRecentShowButton";
import ArchiveButton from "./archive-button/ArchiveButton";
import PastShows from "./past-shows/PastShows";
import Sizes from "../../consts/Sizes";
import BackgroundImage from "./background-image/BackgroundImage";

class ResidentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mixCloudWidget: null,
      displayShows: false,
      orderedShows: null,
      mostRecentShow: null,
    };
    this.handleArchiveButtonClick = this.handleArchiveButtonClick.bind(this);
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
    this.renderCardContainerMargin = this.renderCardContainerMargin.bind(this);
    this.getMostRecentShow = this.getMostRecentShow.bind(this);
    this.renderShowName = this.renderShowName.bind(this);
    this.renderDate = this.renderDate.bind(this);
  }

  componentDidUpdate() {
    if (this.props.pastShows && !this.state.mostRecentShow) {
      this.getMostRecentShow();
    }
  }

  getMostRecentShow() {
    let arrayWithModifiedTimestamps = this.props.pastShows.map((show) => {
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
        mostRecentShow: orderedByTimestamp[0],
      });
    } else {
      this.setState({
        mostRecentShow: "none",
      });
    }
  }

  renderShowName = (showName) => {
    if (showName.includes("-")) {
      let name = showName.split(" - ")[0].trim();
      return name;
    } else {
      return showName;
    }
  };

  renderDate = (showName) => {
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

  handleArchiveButtonClick() {
    if (this.state.displayShows === true) {
      scroll.scrollTo(0);
      Events.scrollEvent.register(
        "end",
        function () {
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
        marginBottom: "123px",
      };
    } else {
      return null;
    }
  }

  handleMixCloudClick(show) {
    let url = `https://api.mixcloud.com${show.key}embed-json/`;
    axios.get(url).then((res) => {
      this.props.setMixcloudWidget(res.data.html);
      const { cookies } = this.props;
      if (!cookies.get("ehfm")) {
        cookies.set("ehfm", 1, { path: "/" });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
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
              <PastShows
                displayShows={this.state.displayShows}
                allPastShows={this.state.orderedShows}
                handleMixCloudClick={this.handleMixCloudClick}
                renderDate={this.renderDate}
                renderShowName={this.renderShowName}
                mixCloudWidget={this.props.mixCloudWidget}
              />
            </React.Fragment>
          )}
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 183px);
  margin: 143px auto 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: 2rem auto 0;

  @media ${Devices.tablet} {
    margin: 2.5rem auto 0;
  }
`;

const mapStateToProps = (state) => {
  return {
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePlaying: (toggle) => {
      dispatch(IndexActions.switchPlaying(toggle));
    },
    changeVolume: (value) => {
      dispatch(IndexActions.switchVolume(value));
    },
    setMixcloudWidget: (value) => {
      dispatch(IndexActions.setMixcloudWidget(value));
    },
  };
};

const Index = connect(mapStateToProps, mapDispatchToProps)(ResidentProfile);

export default withCookies(Index);
