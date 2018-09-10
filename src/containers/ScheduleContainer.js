import React, { Component } from 'react';

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
        return <p>{show.name}</p>
      })
      return showsForThatDay;
    }
  }


  render(){
    return(
      <React.Fragment>
        {this.props.daysToDisplay}
        {this.renderSelectedDay()}
      </React.Fragment>
    )
  }

}

export default ScheduleContainer;
