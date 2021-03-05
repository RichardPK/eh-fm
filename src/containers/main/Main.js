import React, { Component, useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import axios from "axios";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import Header from "../header/Header";
import SidePlayer from "../../components/players/side-player/SidePlayer";
import Home from "../home/Home";
import ResidentsContainer from "../residents/Residents";
import Resident from "../resident/Resident";
import Footer from "../footer/Footer";
import IndexActions from "../../actions/index";
import ResidentsActions from "../../actions/ResidentsActions";
import PageViewAnalytics from "../../components/analytics/PageViewAnalytics";
import {
  clickedPlay,
  clickedStop,
  clickedMute,
  clickedUnmute,
} from "../../components/analytics/ClickEventAnalytics";
import Devices from "../../consts/Devices";
import About from "../about";
import Support from "../support";
import LiveRadioSchema from "../../components/schema/live-radio-schema/LiveRadioSchema";
import Audio from "../../components/audio/index";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      volume: 1,
    };

    this.props.history.listen((location, action) => {
      const { cookies } = this.props;
      if (!cookies.get("ehfm")) {
        cookies.set("ehfm", 1, { path: "/" });
      }
    });

    this.audioPlayer = React.createRef();
    this.handlePlayPauseClicked = this.handlePlayPauseClicked.bind(this);
    this.handleVolumeClicked = this.handleVolumeClicked.bind(this);
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
  }

  componentDidMount() {
    this.props.getResidents();
  }

  handlePlayPauseClicked() {
    if (this.props.playing === false) {
      this.audioPlayer.current.play();
      this.props.togglePlaying(true);
      clickedPlay();
    } else {
      this.audioPlayer.current.pause();
      this.props.togglePlaying(false);
      clickedStop();
    }
  }

  handleVolumeClicked() {
    if (this.props.volume !== 0) {
      this.audioPlayer.current.volume = 0;
      this.props.changeVolume(0);
      clickedMute();
    } else {
      this.audioPlayer.current.volume = 1;
      this.props.changeVolume(1);
      clickedUnmute();
    }
  }

  handleMixCloudClick(showPath) {
    let url = `https://api.mixcloud.com${showPath}embed-json/`;
    axios.get(url).then((res) => {
      this.props.setMixcloudWidget(res.data.html);
      const { cookies } = this.props;
      if (!cookies.get("ehfm")) {
        cookies.set("ehfm", 1, { path: "/" });
      }
    });
  }

  render() {
    console.log("xxx");
    return (
      <React.Fragment>
        <Audio refTarget={this.audioPlayer} />
        <PageViewAnalytics
          url={window.location.pathname + window.location.search}
        />
        <LiveRadioSchema />
        {this.props.residents.length ? (
          <MainWrapper>
            <Header
              currentShow={this.props.currentShowData}
              residents={this.props.residents}
              playing={this.props.playing}
              volume={this.props.volume}
              handlePlayPauseClicked={this.handlePlayPauseClicked}
              handleVolumeClicked={this.handleVolumeClicked}
              showsUpNext={this.props.scheduleData}
            />
            <SidePlayer
              currentShow={this.props.currentShowData}
              residents={this.props.residents}
              playing={this.props.playing}
              volume={this.props.volume}
              handlePlayPauseClicked={this.handlePlayPauseClicked}
              handleVolumeClicked={this.handleVolumeClicked}
              showsUpNext={this.props.scheduleData}
            />
            <MainInner>
              <Switch>
                <Route
                  path="/residents/:id"
                  render={() => (
                    <Resident
                      cookies={this.props.cookies}
                      key={window.location.pathname}
                      handleMixCloudClick={this.handleMixCloudClick}
                    />
                  )}
                />
                <Route
                  exact
                  path="/residents"
                  render={() => (
                    <ResidentsContainer
                      cookies={this.props.cookies}
                      handleMixCloudClick={this.handleMixCloudClick}
                    />
                  )}
                />
                <Route
                  exact
                  path="/about"
                  render={() => <About pageData={this.props.aboutPageData} />}
                />
                <Route
                  exact
                  path="/support"
                  render={() => (
                    <Support pageData={this.props.supportPageData} />
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Home
                      cookies={this.props.cookies}
                      mixCloudWidget={this.props.mixCloudWidget}
                      handleMixCloudClick={this.handleMixCloudClick}
                    />
                  )}
                />
              </Switch>
            </MainInner>
            <Footer />
          </MainWrapper>
        ) : null}
      </React.Fragment>
    );
  }
}

const MainWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;

  @media ${Devices.tablet} {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const MainInner = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 2;

  @media ${Devices.tablet} {
    grid-column: 2 / 4;
    grid-row: 2 / 2;
  }
`;

const mapStateToProps = (state) => {
  return {
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget,
    residents: state.residents,
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
    getResidents: () => {
      dispatch(ResidentsActions.getResidents());
    },
    setMixcloudWidget: (value) => {
      dispatch(IndexActions.setMixcloudWidget(value));
    },
  };
};

const Index = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default withCookies(Index);
