import React, { Component } from 'react';
import './Schedule.css';

class Schedule extends Component {
  constructor(props){
    super(props);
    this.showTimeParser = this.showTimeParser.bind(this);
  }

  renderSelectedDay(){
    if(this.props.selectedDay !== null){
      let selectedDay = this.props.selectedDay[1];
      let showsForThatDay = selectedDay.map((show, index) => {
        return <div key={index} className="show-listing">
          {this.showTimeParser(show)}
          <p className="show-name" key={index}>{show.name}</p>
        </div>
      })
      return showsForThatDay;
    }
  }

  showTimeParser(show){
    let startTime = show.start_timestamp;
    let endTime = show.end_timestamp;
    let parsedStart = startTime.split(" ").splice(1).join().slice(0, -3);
    let parsedEnd = endTime.split(" ").splice(1).join().slice(0, -3)
    return <p className="show-time">{parsedStart} - {parsedEnd}</p>
  }




  render(){
    return(
      <React.Fragment>
        <div className="schedule-container">
          <h1 className="schedule-header">SCHEDULE</h1>
          <div className="days-header">
            {this.props.daysToDisplay}
          </div>
          <div className="show-schedule">
            {this.renderSelectedDay()}
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Schedule;
