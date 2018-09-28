import React from 'react';
import CurrentShowDetail from '../components/CurrentShowDetail';
import Schedule from '../components/Schedule';

const HomeContainer = (props) => {

  return(
    <React.Fragment>

      <div className="body-container">

        <CurrentShowDetail
          currentShow={props.currentShow}
          playing={props.playing}
          handlePlayPauseClicked = {props.handlePlayPauseClicked}
        />

        <Schedule
          daysToDisplay={props.daysToDisplay}
          selectedDay={props.selectedDay}
        />

      </div>

    </React.Fragment>
  )

}

export default HomeContainer;
