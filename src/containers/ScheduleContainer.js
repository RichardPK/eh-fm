import React, { Component } from 'react';
import './ScheduleContainer.css';

class ScheduleContainer extends Component {
  constructor(props){
    super(props);
  }

  renderSelectedDay(){
    if(this.props.selectedDay !== null){
      let selectedDay = this.props.selectedDay[1];
      console.log(selectedDay);
      // debugger;
      let showsForThatDay = selectedDay.map((show, index) => {
        return <p key={index}>{show.name}</p>
      })
      return showsForThatDay;
    }
  }


  render(){
    return(
      <React.Fragment>
        <div className="days-header">
          {this.props.daysToDisplay}
        </div>
        <div className="show-schedule">
        {this.renderSelectedDay()}
        </div>
      </React.Fragment>
    )
  }

}

export default ScheduleContainer;
