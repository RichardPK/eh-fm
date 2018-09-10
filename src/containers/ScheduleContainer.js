import React, { Component } from 'react';
import _ from 'lodash';

class ScheduleContainer extends Component {
  constructor(props){
    super(props);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
  }

  populateSchedule(){

    if(this.props.showSchedule.length !== 0){
      let showArray = this.convertShowScheduleToArray();
      // console.log(showArray);
      let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
      const allShowDays = nextSevenDaysSchedule.map((show, index) => {
        return <th key={index}>{show[0]}</th>
      })
      return allShowDays;
    } else {
      return <p>Loading</p>
    }
  }

  convertShowScheduleToArray(){
    let showSchedule = this.props.showSchedule;
    let showScheduleArray = [];

    Object.keys(showSchedule).forEach(function(key){
      showScheduleArray.push(key, showSchedule[key]);
      // console.log(key, showSchedule[key]);
    })
    let newArray = _.chunk(showScheduleArray, 2)
    // console.log(showScheduleArray);
    // console.log(newArray);

    let arrayLength = newArray.length;
    let positionToRemove = arrayLength - 1;

    newArray.splice(positionToRemove, 1)
    return newArray;
  }

  deleteDaysInPast(scheduleData){
    let currentDate = this.props.currentDate;

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
        <table>
          <tbody>
            <tr>
              {this.populateSchedule()}
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }

}

export default ScheduleContainer;
