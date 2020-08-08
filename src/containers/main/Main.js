import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import axios from 'axios';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import moment from 'moment';
import _ from 'lodash';
import Header from '../header/Header';
import SidePlayer from '../../components/side-player/SidePlayer';
import Home from '../home/Home';
import ResidentsContainer from '../residents/Residents';
import Resident from '../resident/Resident';
import Footer from '../footer/Footer';
import IndexActions from '../../actions/index';
import ResidentsActions from '../../actions/ResidentsActions';
import Analytics from '../../components/analytics/Analytics';
import ChatangoWidget from '../../components/chatango/chatango-widget/ChatangoWidget';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: [],
      currentDate: null,
      currentDay: null,
      currentShow: null,
      showsUpNext: null,
      playing: false,
      volume: 1
    };

    this.props.history.listen((location, action) => {
      const { cookies } = this.props;
      if (!cookies.get('ehfm')) {
        cookies.set('ehfm', 1, { path: '/' });
      }
    });

    this.audioPlayer = React.createRef();
    this.callEveryHour = this.callEveryHour.bind(this);
    this.handleHourCallTimer = this.handleHourCallTimer.bind(this);
    this.currentShowApiCall = this.currentShowApiCall.bind(this);
    this.scheduleApiCall = this.scheduleApiCall.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
    this.getTodaysSchedule = this.getTodaysSchedule.bind(this);
    this.fetchDay = this.fetchDay.bind(this);
    this.handlePlayPauseClicked = this.handlePlayPauseClicked.bind(this);
    this.handleVolumeClicked = this.handleVolumeClicked.bind(this);
    this.getRemainingShowsToday = this.getRemainingShowsToday.bind(this);
    this.handleMixCloudClick = this.handleMixCloudClick.bind(this);
  }

  componentDidMount() {
    this.currentShowApiCall();
    this.handleHourCallTimer();
    this.props.getResidents();
  }

  callEveryHour() {
    this.currentShowApiCall();

    setInterval(
      function() {
        this.currentShowApiCall();
      }.bind(this),
      1000 * 60 * 60
    );
  }

  handleHourCallTimer() {
    let nextDate = new Date();
    if (nextDate.getMinutes() === 0) {
      this.callEveryHour();
    } else {
      nextDate.setHours(nextDate.getHours() + 1);
      nextDate.setMinutes(0);
      nextDate.setSeconds(0);
      let difference = nextDate - new Date();

      setTimeout(
        function() {
          this.callEveryHour();
        }.bind(this),
        difference
      );
    }
  }

  currentShowApiCall() {
    fetch('https://ehfm.airtime.pro/api/live-info')
      .then((response) => response.json())
      .then((data) =>
        this.setState({ currentShow: data.currentShow[0] }, () => {
          this.scheduleApiCall();
        })
      );
  }

  scheduleApiCall() {
    fetch('https://ehfm.airtime.pro/api/week-info')
      .then((response) => response.json())
      .then(this.fetchDate())
      .then((data) =>
        this.setState({ showSchedule: data }, function() {
          this.populateSchedule();
        })
      );
  }

  fetchDate() {
    let todayDate = new Date();
    let dd = todayDate.getDate();
    let mm = todayDate.getMonth() + 1; //January is 0!
    let yyyy = todayDate.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    let today = yyyy + '-' + mm + '-' + dd;
    this.setState({ currentDate: today }, () => {
      this.fetchDay(todayDate.getDay());
    });
  }

  fetchDay(dayNum) {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.setState({ currentDay: weekdays[dayNum] });
  }

  populateSchedule() {
    const showArray = this.convertShowScheduleToArray();
    const todaysSchedule = this.getTodaysSchedule(showArray);
    const showsUpNext = this.getRemainingShowsToday(todaysSchedule);
    showsUpNext && this.setState({ showsUpNext });
  }

  convertShowScheduleToArray() {
    if (this.state.showSchedule) {
      let showSchedule = this.state.showSchedule;
      let showScheduleArray = [];
      Object.keys(showSchedule).forEach(function(key) {
        showScheduleArray.push(key, showSchedule[key]);
      });
      let newArray = _.chunk(showScheduleArray, 2);
      let arrayLength = newArray.length;
      let positionToRemove = arrayLength - 1;
      newArray.splice(positionToRemove, 1);
      return newArray;
    }
  }

  getTodaysSchedule(scheduleData) {
    let currentDate = this.state.currentDate;
    if (scheduleData) {
      for (let day of scheduleData) {
        if (day[1].length !== 0) {
          if (day[1][0].start_timestamp.includes(currentDate)) {
            let currentDayInScheduleIndex = scheduleData.indexOf(day);
            return scheduleData[currentDayInScheduleIndex];
          }
        }
      }
    }
  }

  getRemainingShowsToday(todaysSchedule) {
    const shows = todaysSchedule[1];
    const now = Date.now();
    let remainingShows = [];
    for (let show of shows) {
      const startTimeInMs = moment(show.start_timestamp, 'YYYY-MM-DD HH:mm:ss').valueOf();
      if (startTimeInMs > now) {
        remainingShows.push(show);
      }
    }
    return remainingShows;
  }

  handlePlayPauseClicked() {
    if (this.props.playing === false) {
      this.audioPlayer.current.play();
      this.props.togglePlaying(true);
    } else {
      this.audioPlayer.current.pause();
      this.props.togglePlaying(false);
    }
  }

  handleVolumeClicked() {
    if (this.props.volume !== 0) {
      this.audioPlayer.current.volume = 0;
      this.props.changeVolume(0);
    } else {
      this.audioPlayer.current.volume = 1;
      this.props.changeVolume(1);
    }
  }

  handleMixCloudClick(show) {
    let url = `https://api.mixcloud.com${show.key}embed-json/`;
    axios.get(url).then((res) => {
      this.props.setMixcloudWidget(res.data.html);
      const { cookies } = this.props;
      if (!cookies.get('ehfm')) {
        cookies.set('ehfm', 1, { path: '/' });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <audio ref={this.audioPlayer} id="audioPlayer" name="media">
          <source src="https://ehfm.out.airtime.pro/ehfm_a" type="audio/mpeg" />
        </audio>
        <ChatangoWidget />
        <Analytics url={window.location.pathname + window.location.search} />

        {this.props.residents.length ? (
          <MainWrapper>
            <Header />
            <SidePlayer
              currentShow={this.state.currentShow}
              residents={this.props.residents}
              playing={this.props.playing}
              volume={this.props.volume}
              handlePlayPauseClicked={this.handlePlayPauseClicked}
              handleVolumeClicked={this.handleVolumeClicked}
              showsUpNext={this.state.showsUpNext}
            />
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
                path="/"
                render={() => (
                  <Home cookies={this.props.cookies} mixCloudWidget={this.props.mixCloudWidget} />
                )}
              />
            </Switch>

            <Footer />
          </MainWrapper>
        ) : null}
      </React.Fragment>
    );
  }
}

const MainWrapper = styled.div`
  display: grid;
  grid-template: auto 1fr / auto 1fr;
  position: relative;
`;

const mapStateToProps = (state) => {
  return {
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget,
    residents: state.residents
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
    }
  };
};

const Index = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

export default withCookies(Index);
