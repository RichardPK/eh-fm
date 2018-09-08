import React, { Component } from 'react';
import ScheduleContainer from './ScheduleContainer'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSchedule: [],
      currentDate: null
    }
    this.apiCall = this.apiCall.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
  }

  componentDidMount(){
    this.apiCall();
    this.fetchDate();
  }

  apiCall(){
    fetch('https://ehfm.airtime.pro/api/week-info')
    .then(response => response.json())
    .then(data => this.setState({ showSchedule: data }));
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
