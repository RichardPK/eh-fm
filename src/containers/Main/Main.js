import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import ReactDOM from 'react-dom';
import Header from "../Header/Header";
import Home from "../Home/Home";
import ResidentsContainer from "../Residents/Residents";
import ResidentShowContainer from "../Residents/SingleResidentContainer/SingleResidentContainer";
import Footer from "../Footer/Footer";
import "./Main.scss";
import IndexActions from "../../actions/index";
import ResidentsActions from "../../actions/ResidentsActions";
import _ from "lodash";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: [],
      currentDate: null,
      currentDay: null,
      currentShow: null,
      selectedDay: null,
      displayedDays: [],
      playing: false,
      volume: 1
    };
    this.audioPlayer = React.createRef();
    this.getResidents = this.getResidents.bind(this);
    this.callEveryHour = this.callEveryHour.bind(this);
    this.handleHourCallTimer = this.handleHourCallTimer.bind(this);
    this.currentShowApiCall = this.currentShowApiCall.bind(this);
    this.scheduleApiCall = this.scheduleApiCall.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
    this.handleScheduleDayClick = this.handleScheduleDayClick.bind(this);
    this.parseDayClassName = this.parseDayClassName.bind(this);
    this.parseDayData = this.parseDayData.bind(this);
    this.removeNextFromDay = this.removeNextFromDay.bind(this);
    this.fetchDay = this.fetchDay.bind(this);
    this.handlePlayPauseClicked = this.handlePlayPauseClicked.bind(this);
    this.handleVolumeClicked = this.handleVolumeClicked.bind(this);
    //
    this.renderHomePage = this.renderHomePage.bind(this);
  }

  componentDidMount() {
    this.currentShowApiCall();
    this.handleHourCallTimer();
    this.getResidents();
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

  getResidents() {
    this.props.getResidents();
  }

  currentShowApiCall() {
    fetch("https://ehfm.airtime.pro/api/live-info")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ currentShow: data }, function() {
          this.scheduleApiCall();
        })
      );
  }

  scheduleApiCall() {
    fetch("https://ehfm.airtime.pro/api/week-info")
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
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let today = yyyy + "-" + mm + "-" + dd;
    this.setState(
      { currentDate: today },
      function() {
        this.fetchDay(todayDate.getDay());
      }.bind(this)
    );
  }

  fetchDay(dayNum) {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.setState({ currentDay: weekday[dayNum] });
  }

  populateSchedule() {
    let showArray = this.convertShowScheduleToArray();
    let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
    if (nextSevenDaysSchedule) {
      const allShowDays = nextSevenDaysSchedule.map((day, index) => {
        return (
          <div
            className={this.parseDayClassName(day, index)}
            id={day[0]}
            onClick={(day) => this.handleScheduleDayClick(day, nextSevenDaysSchedule)}
            key={index}
          >
            {this.parseDayData(day[0])}
          </div>
        );
      });
      this.setState({ displayedDays: allShowDays }, this.handleSelectedDay(nextSevenDaysSchedule[0]));
    }
  }

  parseDayClassName(day, index) {
    // return `days-header-item`;
    return `days-header-item days-header-${index}`;
  }

  handleScheduleDayClick(clickedObj, schedule) {
    let dayClickedName = clickedObj.target.id;
    _.forEach(
      schedule,
      function(day) {
        if (day[0] === dayClickedName) this.handleSelectedDay(day, clickedObj);
      }.bind(this)
    );
  }

  handleSelectedDay(selectedDay, domObject) {
    if (domObject) {
      let oldSelectedObject = document.getElementsByClassName("days-header-0");
      oldSelectedObject[0].classList.remove("days-header-0");
      let classToRemove = domObject.target.classList[1];
      domObject.target.classList.remove(classToRemove);
      domObject.target.classList.add("days-header-0");
    }
    this.setState({ selectedDay: selectedDay }, function() {});
  }

  parseDayData(dayName) {
    let namesWithNextInChopped = this.removeNextFromDay(dayName);
    let splitName = namesWithNextInChopped.split("");
    let sliceToUpperCase = splitName.slice(0, 1);
    let upperCaseSlice = sliceToUpperCase[0].toUpperCase();
    let lowerCaseSlice = splitName.slice(1);
    lowerCaseSlice.unshift(upperCaseSlice);
    let finalDayName = lowerCaseSlice.join("");
    if (finalDayName === this.state.currentDay) {
      return "Today";
    } else {
      return finalDayName;
    }
  }

  removeNextFromDay(dayName) {
    if (dayName.includes("next")) {
      let splitName = dayName.split("");
      let cutName = splitName.splice(4);
      return cutName.join("");
    } else {
      return dayName;
    }
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
            let nextSevenDaysSchedule = scheduleData.slice(currentDayInScheduleIndex, finalDayInScheduleToDisplay);
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

  renderHomePage() {
    return (
      <Home
        currentShow={this.state.currentShow}
        playing={this.props.playing}
        handlePlayPauseClicked={this.handlePlayPauseClicked}
        daysToDisplay={this.state.displayedDays}
        selectedDay={this.state.selectedDay}
        mixCloudWidget={this.props.mixCloudWidget}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <audio ref={this.audioPlayer} id="audioPlayer" name="media">
          <source src="http://ehfm.out.airtime.pro:8000/ehfm_a" type="audio/mpeg" />
        </audio>

        <Header
          currentShow={this.state.currentShow}
          playing={this.props.playing}
          volume={this.props.volume}
          handlePlayPauseClicked={this.handlePlayPauseClicked}
          handleVolumeClicked={this.handleVolumeClicked}
        />

        {this.props.residents.length ? (
          <React.Fragment>
            {this.props.children}

            <Switch>
              <Route exact path="/" render={this.renderHomePage} />
              <Route exact path="/residents" component={ResidentsContainer} />
              <Route path="/residents/:id" component={ResidentShowContainer} />
            </Switch>

            <Footer />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

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

export default Index;
