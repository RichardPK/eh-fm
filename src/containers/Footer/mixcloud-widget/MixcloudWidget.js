import React, { Component } from "react";
import { connect } from "react-redux";
import "./MixcloudWidget.scss";
import renderHTML from 'react-render-html';
import IndexActions from '../../../actions/index';

class ResidentShowDisplay extends Component {
  constructor(props) {
    super(props);
    this.renderMixCloudPlayer = this.renderMixCloudPlayer.bind(this);
  }

  

  renderMixCloudPlayer() {

    if (this.props.mixCloudWidget) {
      return (
        <div className="mixcloud-cont">
          <div className="close-player-btn"
            onClick={() => {
              this.props.setMixcloudWidget(null);
            }}>
            <span>x</span>
          </div>
          <div className="resident-mixcloud-widget">
            {renderHTML(this.props.mixCloudWidget)}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderMixCloudPlayer()}
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => {
  return { 
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlaying: toggle => {
      dispatch(IndexActions.switchPlaying(toggle));
    },
    changeVolume: value => {
      dispatch(IndexActions.switchVolume(value));
    },
    setMixcloudWidget: value => {
      dispatch(IndexActions.setMixcloudWidget(value));
    }
  };
};

const Index =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResidentShowDisplay)
;

export default Index;
