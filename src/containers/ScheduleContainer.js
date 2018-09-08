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
    // console.log(newArray);

    let arrayLength = newArray.length;
    let positionToRemove = arrayLength - 1;

    // remove the unnecessary API version
    newArray.splice(positionToRemove, 1)

    return newArray;
  }

  populateSchedule(){
    let showArray = this.convertShowScheduleToArray();
    console.log(showArray);

    const allShowDays = showArray.map((show, index) => {
      return <th>{show[0]}</th>
    })

    return allShowDays;
  }

  render(){
    return(
      <React.Fragment>
        <table>
          {this.populateSchedule()}
        </table>
      </React.Fragment>
    )
  }

}

export default ScheduleContainer;
