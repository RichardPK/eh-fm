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
      currentDay: null,
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
    this.parseDayClassName = this.parseDayClassName.bind(this);
    this.parseDayData = this.parseDayData.bind(this);
    this.removeNextFromDay = this.removeNextFromDay.bind(this);
    this.fetchDay = this.fetchDay.bind(this);
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
    // console.log("schedule API data loaded");
  }

  showApiDataLoaded(){
    // console.log("show API data loaded");
  }

  fetchDate(){
    let todayDate = new Date();
    let dd = todayDate.getDate();
    let mm = todayDate.getMonth()+1; //January is 0!
    let yyyy = todayDate.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    }
    if(mm<10) {
      mm = '0'+mm
    }
    let today = yyyy + '-' + mm + '-' + dd;
    this.setState({currentDate: today}, function(){
      this.fetchDay(todayDate.getDay())
    }.bind(this))
  }

  fetchDay(dayNum){
    let weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.setState({currentDay: weekday[dayNum]});
  }

  populateSchedule(){
    let showArray = this.convertShowScheduleToArray();
    let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
    const allShowDays = nextSevenDaysSchedule.map((day, index) => {
      return <div className={this.parseDayClassName(day, index)}
        id={day[0]}
        onClick={(day) => this.handleScheduleDayClick(day, nextSevenDaysSchedule)}
        key={index}>
        {this.parseDayData(day[0])}
      </div>
    })
    this.setState({displayedDays: allShowDays},
      this.handleSelectedDay(nextSevenDaysSchedule[0]));
    }

    parseDayClassName(day, index){
      return `days-header-item days-header-${index}`;
    }

    parseDayData(dayName){
      let namesWithNextInChopped = this.removeNextFromDay(dayName);
      let splitName = namesWithNextInChopped.split('');
      let sliceToUpperCase = splitName.slice(0, 1);
      let upperCaseSlice = sliceToUpperCase[0].toUpperCase();
      let lowerCaseSlice = splitName.slice(1);
      lowerCaseSlice.unshift(upperCaseSlice)
      let finalDayName = lowerCaseSlice.join('');
      if(finalDayName === this.state.currentDay){
        return 'Today'
      } else {
        return finalDayName;
      }
    }

    removeNextFromDay(dayName){
      if(dayName.includes('next')){
        let splitName = dayName.split('');
        let cutName = splitName.splice(4);
        return cutName.join('');
      } else {
        return dayName;
      }
    }

    handleSelectedDay(selectedDay){
      this.setState({selectedDay: selectedDay})
    }

    handleScheduleDayClick(clickedObj, schedule){
      console.log(schedule);
      let dayClickedName = clickedObj.target.id;
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
