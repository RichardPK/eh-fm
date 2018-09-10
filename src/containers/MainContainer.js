import React, { Component } from 'react';
import ScheduleContainer from './ScheduleContainer'
import _ from 'lodash';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSchedule: [],
      currentDate: null,
      selectedDay: null,
      displayedDays: []
    }
    this.apiCall = this.apiCall.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
    this.handleScheduleDayClick = this.handleScheduleDayClick.bind(this);
  }

  componentDidMount(){
    this.apiCall();

  }

  apiCall(){
    fetch('https://ehfm.airtime.pro/api/week-info')
    .then(response => response.json())
    .then(this.fetchDate())
    .then(data => this.setState({ showSchedule: data }, function(){
      this.populateSchedule()
    }))
    // .then(this.populateSchedule())
    .then(this.apiDataLoaded())
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

  apiDataLoaded(){
    console.log("loaded");
  }

  populateSchedule(){
    let showArray = this.convertShowScheduleToArray();
    let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);

    const allShowDays = nextSevenDaysSchedule.map((day, index) => {
      return <div className="scheduleDayHeaderItem"
        onClick={(clickedObj) => this.handleScheduleDayClick(clickedObj)}
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

    handleScheduleDayClick(clickedObj){
      let dayClickedName = clickedObj.target.innerText;
      
    }

    convertShowScheduleToArray(){
      let showSchedule = this.state.showSchedule;
      let showScheduleArray = [];

      Object.keys(showSchedule).forEach(function(key){
        showScheduleArray.push(key, showSchedule[key]);
        // console.log(key, showSchedule[key]);
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
            let nextSevenDaysSchedule = scheduleData.splice(currentDayInScheduleIndex, finalDayInScheduleToDisplay);
            return nextSevenDaysSchedule;
          }
        }
      }
    }

    render(){
      return(
        <React.Fragment>
          <ScheduleContainer
            daysToDisplay={this.state.displayedDays}
            selectedDay={this.state.selectedDay}
          />
        </React.Fragment>
      )
    }

  }

  export default Main;
