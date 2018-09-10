import React, { Component } from 'react';
import _ from 'lodash';

class ScheduleContainer extends Component {
  constructor(props){
    super(props);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
    this.displaySchedule = this.displaySchedule.bind(this);
  }

  populateSchedule(){

    if(this.props.showSchedule.length !== 0){
      // console.log("Something here: " + this.props.showSchedule);
      let showArray = this.convertShowScheduleToArray();
      console.log(showArray);
      this.deleteDaysInPast(showArray);

    } else {
      // console.log("Nothing here:" + this.props.showSchedule);
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

    // remove the unnecessary API version
    newArray.splice(positionToRemove, 1)

    return newArray;
  }

  deleteDaysInPast(scheduleData){
    let currentDate = this.props.currentDate;
    for (let day of scheduleData){
      if (day[1].length !== 0){
        debugger;
        // if (day[1][1].start_timestamp.includes("cheese")){
        console.log(day[1][0].start_timestamp);
      }
    }


  }
  // }

  displaySchedule(showArray){
    const allShowDays = showArray.map((show, index) => {
      return <th key={index}>{show[0]}</th>
    })
    return allShowDays;
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
