import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import './ResidentsContainer.css'

class ResidentsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      prismicDoc: null
    }
  }

  componentDidMount(){
    console.log("Resident component mounted");
    const apiEndpoint = "https://testreporpk.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint)
    .then(api => {
      api.query(Prismic.Predicates.at('document.type', 'show')).then(response => {
        if (response) {
          this.setState({ prismicDoc: response.results });
        }
      });
    });
  }

  render(){
    return(
      <div className="residents-container">
        <p>Hello</p>
      </div>
    )
  }


}

export default ResidentsContainer;
