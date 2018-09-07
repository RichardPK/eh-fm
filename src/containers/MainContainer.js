import React, { Component } from 'react';
import ScheduleContainer from './ScheduleContainer'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSchedule: []
    }
  }

  componentDidMount(){
    fetch('https://ehfm.airtime.pro/api/week-info')
    .then(response => response.json())
    .then(data => this.setState({ showSchedule: data }));
  }

  render(){
    return(
      <React.Fragment>
        <p>Main</p>
        <ScheduleContainer
          showSchedule={this.state.showSchedule}
        />
      </React.Fragment>
    )
  }

}

export default Main;
