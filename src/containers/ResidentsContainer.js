import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import './ResidentsContainer.css';
import ResidentListItem from '../components/ResidentListItem';

class ResidentsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      prismicDoc: null
    }
    this.renderAllShows = this.renderAllShows.bind(this);
  }

  componentDidMount(){
    console.log("Resident component mounted");
    const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint)
    .then(api => {
      api.query(Prismic.Predicates.at('document.type', 'show')).then(response => {
        if (response) {
          this.setState({ prismicDoc: response.results });
        }
      });
    });
  }

  renderAllShows() {
    if (this.state.prismicDoc) {
      let allShows = this.state.prismicDoc.map((show, index) => {
        return <ResidentListItem
          show={show} index={index} key={index}
          showTitle = {show.data.show_title}
          showDescription = {show.data.show_description}
          showImage = {show.data.show_image.url}
          showId = {show.uid}
        />
      })
      return allShows;
    }
    return <p>Loading...</p>;
  }



  render(){
    return(
      <React.Fragment>
        <div className="residents-container">
          {this.renderAllShows()}
        </div>
      </React.Fragment>
    )
  }


}

export default ResidentsContainer;
