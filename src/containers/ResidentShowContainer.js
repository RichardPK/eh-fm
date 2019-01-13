import React, {Component} from 'react';
import Prismic from 'prismic-javascript';
import './ResidentShowContainer.css';
import ResidentShowDisplay from '../components/ResidentShowDisplay';
import axios from 'axios';

class ResidentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showId: this.props.match.params.id,
      prismicDoc: null,
      pastShows: null,
      selectedShow: null
    }
    this.findSelectedShow = this.findSelectedShow.bind(this);
    this.renderShowDetail = this.renderShowDetail.bind(this);
    this.mixCloudAPICall = this.mixCloudAPICall.bind(this);
  }

  findSelectedShow(){
    for (let show of this.state.prismicDoc){
      if (show.uid === this.state.showId){
        this.setState({selectedShow: show}, this.mixCloudAPICall);
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

      axios.get(`https://api.${modifiedUrl}cloudcasts/`)
        .then(res => {
          let shows = res.data.data;
          this.setState({ pastShows: shows });
        })
    }
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
      return (
      <ResidentShowDisplay
        showTitle = {show.data.show_title}
        showDescription = {show.data.show_description}
        showImage = {show.data.show_image.fullscreen.url}
        showId = {show.uid}
        facebook = {show.data.socials[0].facebook}
        twitter = {show.data.socials[0].twitter}
        instagram = {show.data.socials[0].instagram}
        showTime = {show.data.show_time}
        pastShows = {this.state.pastShows}
      />
      )
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
