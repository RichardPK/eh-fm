import React, { Component } from "react";
import styled from "styled-components/macro";
import ResidentListItem from "../../components/resident-list-item/ResidentListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlaceholderShowImg from "../../assets/images/placeholder-showimg.jpg";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import MetaData from "../../components/metadata/MetaData";

class ResidentsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <MetaData
          title={"Residents | EH-FM"}
          url={window.location.href}
          imageSrc={PlaceholderShowImg}
          description={
            "Get to know our presenters and listen back to the archive of previous shows."
          }
        />
        <Wrapper
          mixCloudWidget={this.props.mixCloudWidget}
          cookiesBannerShowing={this.props.cookies.get("ehfm") !== "1"}
        >
          {this.props.residents.length ? (
            this.props.residents.map((show, index) => {
              return (
                <ResidentListItem
                  show={show}
                  index={index}
                  key={index}
                  showTitle={show.data.show_title}
                  showDescription={show.data.show_descriptiosn}
                  thumbnailImage={show.data.show_image.url}
                  showId={show.uid}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  max-width: ${Sizes.maxInnerWidth};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 163px auto
    ${(props) =>
      props.cookiesBannerShowing ? "95px" : props.mixCloudWidget ? `123px` : 0};

  @media ${Devices.tablet} {
    margin: 143px auto
      ${(props) =>
        props.cookiesBannerShowing
          ? "70px"
          : props.mixCloudWidget
          ? `123px`
          : 0};
  }
`;

const mapStateToProps = (state) => {
  return {
    residents: state.residents,
    mixCloudWidget: state.index.mixCloudWidget,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const connectedResidentsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResidentsContainer)
);

export default connectedResidentsContainer;
