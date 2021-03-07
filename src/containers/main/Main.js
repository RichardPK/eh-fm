import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { useCookies } from "react-cookie";
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
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";

const Main = ({
  aboutPageData,
  supportPageData,
  currentShowData,
  scheduleData,
  residentsData,
}) => {
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml, handleMixcloudClick } = useContext(
    MixcloudWidgetContext
  );

  return (
    <React.Fragment>
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
            <Route
              path="/residents/:id"
              render={() => (
                <Resident
                  cookies={cookies}
                  handleMixcloudClick={handleMixcloudClick}
                  mixcloudWidgetHtml={mixcloudWidgetHtml}
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
