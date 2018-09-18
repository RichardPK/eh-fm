import React, { Component } from 'react';
import './Schedule.css';

class Schedule extends Component {
  constructor(props){
    super(props);
    this.showTimeParser = this.showTimeParser.bind(this);
    this.showNameParser = this.showNameParser.bind(this);
  }

  renderSelectedDay(){
    if(this.props.selectedDay !== null){
      let selectedDay = this.props.selectedDay[1];
      let showsForThatDay = selectedDay.map((show, index) => {
        return <tr key={index} className="show-listing">
          {this.showTimeParser(show)}
          <td className="show-name" key={index}>{this.showNameParser(show)}</td>
        </tr>
      })
      return showsForThatDay;
    }
  }

  showNameParser(show){
    let currentShowName = show.name;
    let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, '\'');
    let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
    return parsedForAmpersands;
  }

  showTimeParser(show){
    let startTime = show.start_timestamp;
    let endTime = show.end_timestamp;
    let parsedStart = startTime.split(" ").splice(1).join().slice(0, -3);
    let parsedEnd = endTime.split(" ").splice(1).join().slice(0, -3)
    return <td className="show-time">{parsedStart} - {parsedEnd}</td>
  }




  render(){
    return(
      <React.Fragment>
        <div className="schedule-header-body-container">
          <h1 className="schedule-header">Schedule</h1>
          <div className="schedule-container">

            <div className="schedule-subcontainer">
              <div className="days-header">
                {this.props.daysToDisplay}
              </div>
              <div className="schedule-divider"></div>
              <table className="show-schedule">
                <tbody>
                  {this.renderSelectedDay()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Schedule;
