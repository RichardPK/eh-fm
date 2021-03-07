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
import PageViewAnalytics from "../../components/analytics/PageViewAnalytics";
import Devices from "../../consts/Devices";
import About from "../about";
import Support from "../support";
import LiveRadioSchema from "../../components/schema/live-radio-schema/LiveRadioSchema";
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
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
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
    return (
      <React.Fragment>
        <PageViewAnalytics
          url={window.location.pathname + window.location.search}
        />
        <LiveRadioSchema />
        <MainWrapper>
          <Header
            currentShow={this.props.currentShowData}
            residentsData={this.props.residentsData}
            showsUpNext={this.props.scheduleData}
          />
          <SidePlayer
            currentShow={this.props.currentShowData}
            residentsData={this.props.residentsData}
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
                    residentsData={this.props.residentsData}
                  />
                )}
              />
              <Route
                exact
                path="/residents"
                render={() => (
                  <ResidentsContainer
                    cookies={this.props.cookies}
                    residentsData={this.props.residentsData}
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
                render={() => <Support pageData={this.props.supportPageData} />}
              />
              <Route
                exact
                path="/"
                render={() => <Home cookies={this.props.cookies} />}
              />
            </Switch>
          </MainInner>
          <Footer />
        </MainWrapper>
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
    mixCloudWidget: state.index.mixCloudWidget,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMixcloudWidget: (value) => {
      dispatch(IndexActions.setMixcloudWidget(value));
    },
  };
};

const Index = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default withCookies(Index);
