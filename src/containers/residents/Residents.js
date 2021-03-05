import React, { Component } from "react";
import styled from "styled-components/macro";
import ResidentListItem from "../../components/resident-list-item/ResidentListItem";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlaceholderShowImg from "../../assets/images/placeholder-showimg.jpg";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";

class ResidentsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Residents | EHFM</title>
          <meta name="fragment" content="!" />
          <meta
            property="og:title"
            data-react-helmet="true"
            content="Residents | EHFM"
          />
          <meta
            name="description"
            data-react-helmet="true"
            content="Get to know our presenters and listen back to the archive of previous shows."
          />
          <meta
            property="og:description"
            data-react-helmet="true"
            content="Get to know our presenters and listen back to the archive of previous shows."
          />
          <meta
            property="og:url"
            data-react-helmet="true"
            content="http://www.ehfm.live/residents"
          />
          <meta
            name="twitter:image"
            data-react-helmet="true"
            content={PlaceholderShowImg}
          />
          <meta
            name="og:image"
            data-react-helmet="true"
            content={PlaceholderShowImg}
          />
        </Helmet>
        <Wrapper
          mixCloudWidget={this.props.mixCloudWidget}
          cookiesBannerShowing={this.props.cookies.get("ehfm") !== "1"}
        >
          {this.props.residentsData.length ? (
            this.props.residentsData.map((show, index) => {
              return (
                <ResidentListItem
                  show={show}
                  index={index}
                  key={index}
                  showTitle={show.data.show_title}
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
  /* max-width: ${Sizes.maxInnerWidth}; */
  padding: 0 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem auto
    ${(props) =>
      props.cookiesBannerShowing ? "70px" : props.mixCloudWidget ? `123px` : 0};

  @media ${Devices.tablet} {
    margin: 2.5rem auto
      ${(props) =>
        props.cookiesBannerShowing
          ? "95px"
          : props.mixCloudWidget
          ? `123px`
          : 0};
  }
`;

const mapStateToProps = (state) => {
  return {
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
