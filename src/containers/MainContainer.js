import React, { Component } from 'react';
import ScheduleContainer from './ScheduleContainer';
import Player from '../components/Player';
import './MainContainer.css'
import _ from 'lodash';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSchedule: [],
      currentDate: null,
      currentShow: null,
      selectedDay: null,
      displayedDays: []
    }
    this.currentShowApiCall = this.currentShowApiCall.bind(this);
    this.scheduleApiCall = this.scheduleApiCall.bind(this);
    this.showApiDataLoaded = this.showApiDataLoaded.bind(this);
    this.scheduleApiDataLoaded = this.scheduleApiDataLoaded.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
    this.handleScheduleDayClick = this.handleScheduleDayClick.bind(this);
  }

  componentDidMount(){
    this.currentShowApiCall();
  }

  currentShowApiCall(){
    fetch('https://ehfm.airtime.pro/api/live-info')
    .then(response => response.json())
    .then(data => this.setState({ currentShow: data }, function(){
      this.scheduleApiCall()
    }))
    .then(this.showApiDataLoaded())
  }

  scheduleApiCall(){
    fetch('https://ehfm.airtime.pro/api/week-info')
    .then(response => response.json())
    .then(this.fetchDate())
    .then(data => this.setState({ showSchedule: data }, function(){
      this.populateSchedule()
    }))
    // .then(this.populateSchedule())
    .then(this.scheduleApiDataLoaded())
  }

  scheduleApiDataLoaded(){
    console.log("schedule API data loaded");
  }

  showApiDataLoaded(){
    console.log("show API data loaded");
  }

  fetchDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    }
    if(mm<10) {
      mm = '0'+mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    this.setState({currentDate: today})
  }

  populateSchedule(){
    let showArray = this.convertShowScheduleToArray();
    let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
    const allShowDays = nextSevenDaysSchedule.map((day, index) => {
      return <div className="days-header-item"
        onClick={(day) => this.handleScheduleDayClick(day, nextSevenDaysSchedule)}
        key={index}>
        {day[0]}
      </div>
    })
    this.setState({displayedDays: allShowDays},
      this.handleSelectedDay(nextSevenDaysSchedule[0]));
    }

    handleSelectedDay(selectedDay){
      this.setState({selectedDay: selectedDay})
    }

    handleScheduleDayClick(clickedObj, schedule){
      console.log(schedule);
      let dayClickedName = clickedObj.target.innerText;
      _.forEach(schedule, function(day){
        if(day[0] === dayClickedName)
        this.handleSelectedDay(day)
      }.bind(this));
    }

    convertShowScheduleToArray(){
      let showSchedule = this.state.showSchedule;
      let showScheduleArray = [];
      Object.keys(showSchedule).forEach(function(key){
        showScheduleArray.push(key, showSchedule[key]);
      })
      let newArray = _.chunk(showScheduleArray, 2)
      let arrayLength = newArray.length;
      let positionToRemove = arrayLength - 1;
      newArray.splice(positionToRemove, 1)
      return newArray;
    }

    deleteDaysInPast(scheduleData){
      let currentDate = this.state.currentDate;
      for (let day of scheduleData){
        if (day[1].length !== 0){
          if(day[1][0].start_timestamp.includes(currentDate)){
            let currentDayInScheduleIndex = scheduleData.indexOf(day);
            let finalDayInScheduleToDisplay = currentDayInScheduleIndex + 7;
            let nextSevenDaysSchedule = scheduleData.slice(currentDayInScheduleIndex, finalDayInScheduleToDisplay);
            return nextSevenDaysSchedule;
          }
        }
      }
    }

    render(){
      return(
        <React.Fragment>
          <div className="player-container">
            <Player
              currentShow={this.state.currentShow}
            />
          </div>
          <div className="schedule-container">
            <ScheduleContainer
              daysToDisplay={this.state.displayedDays}
              selectedDay={this.state.selectedDay}
            />
          </div>
        </React.Fragment>
      )
    }

  }

  export default Main;
