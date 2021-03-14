import React, { useEffect } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Header from "../header/Header";
import SidePlayer from "../../components/players/side-player/SidePlayer";
import Home from "../home/Home";
import ResidentsContainer from "../residents/Residents";
import Resident from "../resident/Resident";
import Footer from "../footer/Footer";
import PageViewAnalytics from "../../components/analytics/PageViewAnalytics";
import Devices from "../../consts/Devices";
import About from "../about";
import Support from "../support";
import LiveRadioSchema from "../../components/schema/live-radio-schema/LiveRadioSchema";
import { useCookies } from "react-cookie";

const Main = ({
  aboutPageData,
  supportPageData,
  currentShowData,
  scheduleData,
  residentsData,
  carouselData,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["ehfm"]);

  useEffect(() => {
    if (history.action === "PUSH" && !cookies.ehfm) {
      setCookie("ehfm", 1, { path: "/" });
    }
  }, [history, location, cookies, setCookie]);

  return (
    <>
      <PageViewAnalytics
        url={window.location.pathname + window.location.search}
      />
      <LiveRadioSchema />
      <MainWrapper>
        <Header currentShow={currentShowData} />
        <SidePlayer
          currentShow={currentShowData}
          residentsData={residentsData}
          scheduleData={scheduleData}
        />
        <MainInner>
          <Switch>
            <Route path="/residents/:id">
              <Resident residentsData={residentsData} />
            </Route>
            <Route exact path="/residents">
              <ResidentsContainer residentsData={residentsData} />
            </Route>
            <Route exact path="/about">
              <About pageData={aboutPageData} />
            </Route>
            <Route exact path="/support">
              <Support pageData={supportPageData} />
            </Route>
            <Route exact path="/">
              <Home carouselData={carouselData} />
            </Route>
          </Switch>
        </MainInner>
        <Footer />
      </MainWrapper>
    </>
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
