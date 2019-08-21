import React from "react";
import CurrentShow from "../../components/CurrentShow/CurrentShow";
import Schedule from "../../components/Schedule/Schedule";
import { Helmet } from "react-helmet";

const HomeContainer = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>EH-FM</title>
        <meta property="og:title" content="EH-FM" />
        <meta name="description" content="Independent community radio for Edinburgh" />
        <meta property="og:description" content="Independent community radio for Edinburgh" />
        <meta property="og:url" content="http://www.ehfm.live" />
        <meta name="twitter:image" content="https://www.ehfm.live/placeholder-showimg.jpg" />
        <meta name="twitter:image" content="https://www.ehfm.live/placeholder-showimg.jpg" />
      </Helmet>

      <div className="body-container" style={{ marginBottom: props.mixCloudWidget ? "123px" : null }}>
        <CurrentShow
          currentShow={props.currentShow}
          playing={props.playing}
          handlePlayPauseClicked={props.handlePlayPauseClicked}
        />

        <Schedule daysToDisplay={props.daysToDisplay} selectedDay={props.selectedDay} />
      </div>
    </React.Fragment>
  );
};

export default HomeContainer;
