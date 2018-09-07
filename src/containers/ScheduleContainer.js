import React, { Component } from 'react';
import _ from 'lodash';

class ScheduleContainer extends Component {
  constructor(props){
    super(props);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(this);
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
    console.log(newArray);

    let arrayLength = newArray.length;
    let positionToRemove = arrayLength - 1;
    newArray.splice(positionToRemove, 1)
    // console.log("after splice: " + newArray);
  }

  populateSchedule(){
    this.convertShowScheduleToArray();
  }

  render(){
    return(
      <React.Fragment>
        <ul>
          {this.populateSchedule()}
        </ul>
      </React.Fragment>
    )
  }

}

export default ScheduleContainer;
