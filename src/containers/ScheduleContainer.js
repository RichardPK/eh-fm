import React, { Component } from 'react';
import _ from 'lodash';

class ScheduleContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              {this.props.daysToDisplay}
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }

}

export default ScheduleContainer;
