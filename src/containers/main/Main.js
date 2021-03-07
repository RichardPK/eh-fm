import React, { Component, useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
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

const Main = ({
  aboutPageData,
  supportPageData,
  currentShowData,
  scheduleData,
  residentsData,
}) => {
  const [cookies, setCookie] = useCookies(["ehfm"]);

  const handleMixCloudClick = (showPath) => {
    let url = `https://api.mixcloud.com${showPath}embed-json/`;
    axios.get(url).then((res) => {
      this.props.setMixcloudWidget(res.data.html);
      if (!cookies["ehfm"]) {
        setCookie("ehfm", 1, { path: "/" });
      }
    });
  };

  return (
    <React.Fragment>
      <PageViewAnalytics
        url={window.location.pathname + window.location.search}
      />
      <LiveRadioSchema />
      <MainWrapper>
        <Header
          currentShow={currentShowData}
          residentsData={residentsData}
          showsUpNext={scheduleData}
        />
        <SidePlayer
          currentShow={currentShowData}
          residentsData={residentsData}
          showsUpNext={scheduleData}
        />
        <MainInner>
          <Switch>
            <Route
              path="/residents/:id"
              render={() => (
                <Resident
                  cookies={cookies}
                  key={window.location.pathname}
                  handleMixCloudClick={handleMixCloudClick}
                  residentsData={residentsData}
                />
              )}
            />
            <Route
              exact
              path="/residents"
              render={() => (
                <ResidentsContainer
                  cookies={cookies}
                  residentsData={residentsData}
                />
              )}
            />
            <Route
              exact
              path="/about"
              render={() => <About pageData={aboutPageData} />}
            />
            <Route
              exact
              path="/support"
              render={() => <Support pageData={supportPageData} />}
            />
            <Route exact path="/" render={() => <Home cookies={cookies} />} />
          </Switch>
        </MainInner>
        <Footer />
      </MainWrapper>
    </React.Fragment>
  );
};

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

export default Main;
