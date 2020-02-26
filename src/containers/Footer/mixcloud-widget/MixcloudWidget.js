import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './MixcloudWidget.scss';
import renderHTML from 'react-render-html';
import IndexActions from '../../../actions/index';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

class ResidentShowDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.mixCloudWidget && (
          <Wrapper>
            <CloseButton
              onClick={() => {
                this.props.setMixcloudWidget(null);
              }}
            >
              <span>x</span>
            </CloseButton>
            <WidgetWrapper>{renderHTML(this.props.mixCloudWidget)}</WidgetWrapper>
          </Wrapper>
        )}
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  bottom: -3px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  margin-right: 10px;
  text-align: center;
  align-self: flex-end;
  background-color: ${Colors.altBlue60Transparent};
  font-size: 14px;
  padding: 1px 6px 4px 7px;
  color: ${Colors.softWhite};
  cursor: pointer;

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.softWhite};
      color: ${Colors.altBlue60Transparent};
      transition: background-color 0.2s, color 0.2s;
    }
  }
`;

const WidgetWrapper = styled.div``;

const mapStateToProps = (state) => {
  return {
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePlaying: (toggle) => {
      dispatch(IndexActions.switchPlaying(toggle));
    },
    changeVolume: (value) => {
      dispatch(IndexActions.switchVolume(value));
    },
    setMixcloudWidget: (value) => {
      dispatch(IndexActions.setMixcloudWidget(value));
    }
  };
};

const Index = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResidentShowDisplay);
export default Index;
