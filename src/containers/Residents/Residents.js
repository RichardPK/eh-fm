import React, { Component } from "react";
import Prismic from "prismic-javascript";
import "./Residents.scss";
import ResidentListItem from "./ResidentsListItem/ResidentListItem";
import { Helmet } from "react-helmet";

class ResidentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prismicDoc: null
    };
    this.renderAllShows = this.renderAllShows.bind(this);
  }

  componentDidMount() {
    console.log("ResidentsContainer mounted");
    const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then((api) => {
      api
        .query(Prismic.Predicates.at("document.type", "show"), {
          pageSize: 100,
          orderings: "[my.show.show_title]"
        })
        .then((response) => {
          if (response) {
            this.setState({ prismicDoc: response.results });
          }
        });
    });
  }

  renderAllShows() {
    if (this.state.prismicDoc) {
      let allShows = this.state.prismicDoc.map((show, index) => {
        return (
          <ResidentListItem
            show={show}
            index={index}
            key={index}
            showTitle={show.data.show_title}
            showDescription={show.data.show_description}
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
      <React.Fragment>
        <Helmet>
          <title>Residents | EH-FM</title>
          <meta property="og:title" data-react-helmet="true" content="Residents | EH-FM" />
          <meta name="description" data-react-helmet="true" content="The people defining the sound of EH-FM" />
          <meta property="og:description" data-react-helmet="true" content="The people defining the sound of EH-FM" />
          <meta property="og:url" data-react-helmet="true" content="http://www.ehfm.live/residents" />
          <meta name="twitter:image" data-react-helmet="true" content="https://www.ehfm.live/placeholder-showimg.jpg" />
          <meta name="twitter:image" data-react-helmet="true" content="https://www.ehfm.live/placeholder-showimg.jpg" />
        </Helmet>
        <div className="residents-container">{this.renderAllShows()}</div>
      </React.Fragment>
    );
  }
}

export default ResidentsContainer;
