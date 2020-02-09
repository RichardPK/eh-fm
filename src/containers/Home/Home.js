import React from 'react';
import CurrentShow from '../../components/CurrentShow/CurrentShow';
import Schedule from '../../components/Schedule/Schedule';
import { Helmet } from 'react-helmet';
import PlaceholderShowImg from '../../assets/images/placeholder-showimg.jpg';
import styled from 'styled-components';
import Colors from '../../consts/Colors';
import Devices from '../../consts/Devices';

const HomeContainer = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>EH-FM</title>
        <meta name="fragment" content="!" />
        <meta property="og:title" data-react-helmet="true" content="EH-FM" />
        <meta
          name="description"
          data-react-helmet="true"
          content="EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        />
        <meta
          property="og:description"
          data-react-helmet="true"
          content="EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        />
        <meta property="og:url" data-react-helmet="true" content="https://www.ehfm.live" />
        <meta property="og:image" data-react-helmet="true" content={PlaceholderShowImg} />
        <meta name="twitter:image" data-react-helmet="true" content={PlaceholderShowImg} />
      </Helmet>

      <Wrapper mixCloudWidget={props.mixCloudWidget}>
        <CurrentShow
          currentShow={props.currentShow}
          residents={props.residents}
          playing={props.playing}
          handlePlayPauseClicked={props.handlePlayPauseClicked}
        />

        <Schedule
          nextSevenDaysSchedule={props.nextSevenDaysSchedule}
          selectedDay={props.selectedDay}
        />
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => (props.mixCloudWidget ? `123px` : `auto`)};
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  h1 {
    font-size: 18px;
    font-weight: 500;
    color: ${Colors.notQuiteBlack};
  }

  @media ${Devices.tablet} {
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-top: 125px;
  }
`;

export default HomeContainer;
