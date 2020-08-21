import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import renderHTML from "react-render-html";
import IndexActions from "../../../actions/index";
import Colors from "../../../consts/Colors";
import Devices from "../../../consts/Devices";
import LoadingPlaceholder from "../../../components/loading-placeholder/LoadingPlaceholder";
import Sizes from "../../../consts/Sizes";

class ResidentShowDisplay extends Component {
  render() {
    return (
      <>
        {this.props.mixCloudWidget && (
          <Wrapper>
            <CloseButton
              onClick={() => {
                this.props.setMixcloudWidget(null);
              }}
            >
              <span>x</span>
            </CloseButton>
            <WidgetWrapper>
              {renderHTML(this.props.mixCloudWidget)}
            </WidgetWrapper>
            <LoadingPlaceholder height={"calc(100% - 21px)"} zIndex={-1} />
          </Wrapper>
        )}
      </>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  bottom: -3px;
  right: 0;
  display: flex;
  flex-direction: column;

  width: 100%;

  @media ${Devices.tablet} {
    width: calc(100% - ${Sizes.sidePlayerWidthSmaller}px);
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    width: calc(100% - ${Sizes.sidePlayerWidth}px);
  }
`;

const CloseButton = styled.div`
  margin-right: 10px;
  text-align: center;
  align-self: flex-end;
  background-color: ${Colors.ehfmPrimary(0.6)};
  font-size: 14px;
  padding: 1px 6px 4px 7px;
  color: ${Colors.softWhite};
  cursor: pointer;

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.softWhite};
      color: ${Colors.altBlueHover(0.6)};
      transition: background-color 0.2s, color 0.2s;
    }
  }
`;

const WidgetWrapper = styled.div`
  z-index: 1;
`;

const mapStateToProps = (state) => {
  return {
    playing: state.index.playing,
    volume: state.index.volume,
    mixCloudWidget: state.index.mixCloudWidget,
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
    },
  };
};

const Index = connect(mapStateToProps, mapDispatchToProps)(ResidentShowDisplay);
export default Index;
