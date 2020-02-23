import React, { Component } from "react";
import Prismic from "prismic-javascript";
import "./Residents.scss";
import ResidentListItem from "./ResidentsListItem/ResidentListItem";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlaceholderShowImg from "../../assets/images/placeholder-showimg.jpg";

class ResidentsContainer extends Component {
  constructor(props) {
    super(props);

    this.renderAllShows = this.renderAllShows.bind(this);
  }

  renderAllShows() {
    if (this.props.residents.length) {
      let allShows = this.props.residents.map((show, index) => {
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
      });
      return allShows;
    }
    return <p>Loading...</p>;
  }

  render() {
    return (
      <div className="residents-container">
        <Helmet>
          <title>Residents | EH-FM</title>
          <meta name="fragment" content="!" />
          <meta
            property="og:title"
            data-react-helmet="true"
            content="Residents | EH-FM"
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
        {this.renderAllShows()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    residents: state.residents
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connectedResidentsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResidentsContainer)
);

export default connectedResidentsContainer;
