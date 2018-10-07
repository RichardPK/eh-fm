import React, {Component} from 'react';
import Prismic from 'prismic-javascript';
import './ResidentShowContainer.css';
import ResidentShowDisplay from '../components/ResidentShowDisplay';

class ResidentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showId: this.props.match.params.id,
      prismicDoc: null,
      selectedShow: null
    }
    this.findSelectedShow = this.findSelectedShow.bind(this);
    this.renderShowDetail = this.renderShowDetail.bind(this);
  }

  findSelectedShow(){
    for (let show of this.state.prismicDoc){
      if (show.uid === this.state.showId){
        this.setState({selectedShow: show})
      }
    }
    console.log("Finding selected show");
  }

  componentDidMount(){
    console.log("Individual show component mounted");
    const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint)
    .then(api => {
      api.query(Prismic.Predicates.at('document.type', 'show')).then(response => {
        if (response) {
          this.setState({ prismicDoc: response.results }, this.findSelectedShow);
        }
      });
    });
  }

  renderShowDetail(){
    if (this.state.selectedShow) {
      let show = this.state.selectedShow;

      return <ResidentShowDisplay
        showTitle = {show.data.show_title}
        showDescription = {show.data.show_description}
        showImage = {show.data.show_image.url}
        thumbnailImage = {show.data.thumbnail_image.url}
        showId = {show.uid}
      />
    }
    return <p>Loading...</p>;
  }

  render(){

    return(
      <div className = "resident-show-container">
        {this.renderShowDetail()}
      </div>
    )

  }

}

export default ResidentShowContainer;
