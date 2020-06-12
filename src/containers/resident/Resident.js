import React, { Component } from "react";
import styled from "styled-components/macro";
import ResidentProfile from "../../components/resident-profile/ResidentProfile";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withCookies } from "react-cookie";
import MetaData from "../../components/metadata/MetaData";

class ResidentShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: this.props.match.params.id,
      pastShows: null,
      selectedShow: null,
    };
    this.findSelectedShow = this.findSelectedShow.bind(this);
    this.mixCloudAPICall = this.mixCloudAPICall.bind(this);
  }

  componentDidMount() {
    this.findSelectedShow();
  }

  findSelectedShow() {
    for (let show of this.props.residents) {
      if (show.uid === this.state.showId) {
        this.setState({ selectedShow: show }, this.mixCloudAPICall);
      }
    }
  }

  mixCloudAPICall() {
    if (this.state.selectedShow.data.mixcloud_playlist_url) {
      let playlist_url = this.state.selectedShow.data.mixcloud_playlist_url;
      // https://www.mixcloud.com/ehfm/playlists/lunch/

      let wwwCutPoint = playlist_url.indexOf(".") + 1;
      let modifiedUrl = playlist_url.slice(wwwCutPoint);
      const showsToReturn = `100`;

      axios
        .get(`https://api.${modifiedUrl}cloudcasts/?limit=${showsToReturn}`)
        .then((res) => {
          let shows = res.data.data.reverse();
          this.setState({ pastShows: shows });
        });
    }
  }

  render() {
    let titleString;
    let show = this.state.selectedShow;

    if (show) {
      titleString = `${this.state.selectedShow.data.show_title} | EH-FM`;
    }

    return (
      <React.Fragment>
        {show ? (
          <React.Fragment>
            <MetaData
              title={titleString}
              url={window.location.href}
              imageSrc={show.data.show_image.larger.url}
              description={show.data.show_description}
              imageWidth={show.data.show_image.dimensions.width}
              imageHeight={show.data.show_image.dimensions.height}
            />
            <Wrapper mixCloudWidget={this.props.mixCloudWidget}>
              <ResidentProfile
                cookies={this.props.cookies}
                showTitle={show.data.show_title}
                showDescription={show.data.show_description}
                showImage={show.data.show_image.fullscreen.url}
                showId={show.uid}
                facebook={show.data.socials[0].facebook}
                twitter={show.data.socials[0].twitter}
                instagram={show.data.socials[0].instagram}
                showTime={show.data.show_time}
                pastShows={this.state.pastShows}
                mixCloudWidget={this.props.mixCloudWidget}
              />
            </Wrapper>
          </React.Fragment>
        ) : (
          <p>Loading</p>
        )}
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: ${(props) => (props.mixCloudWidget ? `123px` : "auto")};
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

const connectedResidentShowContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResidentShowContainer)
);

export default withCookies(connectedResidentShowContainer);
