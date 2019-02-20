import React from 'react';
import CurrentShow from '../../components/CurrentShow/CurrentShow';
import Schedule from '../../components/Schedule/Schedule';

const HomeContainer = (props) => {

  return(
    <React.Fragment>

      <div className="body-container" 
      style={{ marginBottom: (props.mixCloudWidget ? '123px' : null) }}>

        <CurrentShow
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
