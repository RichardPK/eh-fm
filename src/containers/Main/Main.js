import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Player from '../../components/player/Player';
import Home from '../home/Home';
import ResidentsContainer from '../residents/Residents';
import Resident from '../resident/Resident';
import Footer from '../footer/Footer';
import IndexActions from '../../actions/index';
import ResidentsActions from '../../actions/ResidentsActions';
import _ from 'lodash';
import Analytics from '../../components/analytics/Analytics';
import { withCookies } from 'react-cookie';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: [],
      currentDate: null,
      currentDay: null,
      currentShow: null,
      nextSevenDaysSchedule: [],
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
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
    this.fetchDay = this.fetchDay.bind(this);
    this.handlePlayPauseClicked = this.handlePlayPauseClicked.bind(this);
    this.handleVolumeClicked = this.handleVolumeClicked.bind(this);
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
        this.setState({ currentShow: data }, () => {
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
    let showArray = this.convertShowScheduleToArray();
    let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
    nextSevenDaysSchedule && this.setState({ nextSevenDaysSchedule });
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

  deleteDaysInPast(scheduleData) {
    let currentDate = this.state.currentDate;
    if (scheduleData) {
      for (let day of scheduleData) {
        if (day[1].length !== 0) {
          if (day[1][0].start_timestamp.includes(currentDate)) {
            let currentDayInScheduleIndex = scheduleData.indexOf(day);
            let finalDayInScheduleToDisplay = currentDayInScheduleIndex + 7;
            let nextSevenDaysSchedule = scheduleData.slice(
              currentDayInScheduleIndex,
              finalDayInScheduleToDisplay
            );
            return nextSevenDaysSchedule;
          }
        }
      }
    }
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

  render() {
    return (
      <React.Fragment>
        <audio ref={this.audioPlayer} id="audioPlayer" name="media">
          <source src="https://ehfm.out.airtime.pro/ehfm_a" type="audio/mpeg" />
        </audio>
        <Analytics url={window.location.pathname + window.location.search} />
        <Header />
        <Player
          currentShow={this.state.currentShow}
          residents={this.props.residents}
          playing={this.props.playing}
          volume={this.props.volume}
          handlePlayPauseClicked={this.handlePlayPauseClicked}
          handleVolumeClicked={this.handleVolumeClicked}
        />
        {this.props.residents.length ? (
          <MainWrapper>
            {this.props.children}
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Home
                    cookies={this.props.cookies}
                    currentShow={this.state.currentShow}
                    playing={this.props.playing}
                    handlePlayPauseClicked={this.handlePlayPauseClicked}
                    nextSevenDaysSchedule={this.state.nextSevenDaysSchedule}
                    mixCloudWidget={this.props.mixCloudWidget}
                    residents={this.props.residents}
                    currentDay={this.state.currentDay}
                  />
                )}
              />
              <Route
                exact
                path="/residents"
                component={() => <ResidentsContainer cookies={this.props.cookies} />}
              />
              <Route
                path="/residents/:id"
                component={() => <Resident cookies={this.props.cookies} />}
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
  margin-left: 375px;
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
