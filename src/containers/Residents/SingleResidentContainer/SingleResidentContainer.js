import React, { Component } from "react";
import Prismic from "prismic-javascript";
import ResidentShowDisplay from "./SingleResidentComponent/SingleResidentComponent";
import axios from "axios";
import MetaTags from "react-meta-tags";

class ResidentShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: this.props.match.params.id,
      prismicDoc: null,
      pastShows: null,
      selectedShow: null
    };
    this.findSelectedShow = this.findSelectedShow.bind(this);
    this.renderShowDetail = this.renderShowDetail.bind(this);
    this.mixCloudAPICall = this.mixCloudAPICall.bind(this);
  }

  findSelectedShow() {
    for (let show of this.state.prismicDoc) {
      if (show.uid === this.state.showId) {
        this.setState({ selectedShow: show }, this.mixCloudAPICall);
      }
    }
    console.log("Finding selected show");
  }

  mixCloudAPICall() {
    if (this.state.selectedShow.data.mixcloud_playlist_url) {
      let playlist_url = this.state.selectedShow.data.mixcloud_playlist_url;
      // https://www.mixcloud.com/ehfm/playlists/lunch/

      let wwwCutPoint = playlist_url.indexOf(".") + 1;
      let modifiedUrl = playlist_url.slice(wwwCutPoint);

      axios.get(`https://api.${modifiedUrl}cloudcasts/`).then((res) => {
        let shows = res.data.data.reverse();
        this.setState({ pastShows: shows });
      });
    }
  }

  componentDidMount() {
    console.log("Individual show component mounted");
    const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then((api) => {
      api.query(Prismic.Predicates.at("document.type", "show"), { pageSize: 100 }).then((response) => {
        if (response) {
          this.setState({ prismicDoc: response.results }, this.findSelectedShow);
        }
      });
    });
  }

  renderShowDetail() {
    if (this.state.selectedShow) {
      let show = this.state.selectedShow;
      return (
        <ResidentShowDisplay
          showTitle={show.data.show_title}
          showDescription={show.data.show_description}
          showImage={show.data.show_image.fullscreen.url}
          showId={show.uid}
          facebook={show.data.socials[0].facebook}
          twitter={show.data.socials[0].twitter}
          instagram={show.data.socials[0].instagram}
          showTime={show.data.show_time}
          pastShows={this.state.pastShows}
        />
      );
    }
    return <p>Loading...</p>;
  }

  render() {
    let titleString;

    if (this.state.selectedShow) {
      titleString = `${this.state.selectedShow.data.show_title} | EH-FM`;
    }

    return (
      <React.Fragment>
        {this.state.selectedShow ? (
          <React.Fragment>
            <MetaTags>
              <title>{titleString}</title>
              <meta name="description" content={this.state.selectedShow.data.show_description} />
              <meta property="og:title" content={titleString} />
              <meta property="og:description" content={this.state.selectedShow.data.show_description} />
              <meta name="twitter:image" content={this.state.selectedShow.data.show_image.larger.url} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:image" content={this.state.selectedShow.data.show_image.larger.url} />
            </MetaTags>
            <div className="resident-show-container">{this.renderShowDetail()}</div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default ResidentShowContainer;
