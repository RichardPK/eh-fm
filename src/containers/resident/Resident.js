import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ResidentProfile from "../../components/resident-profile/ResidentProfile";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";

const ResidentShowContainer = ({
  cookies,
  handleMixCloudClick,
  mixcloudWidgetHtml,
  residentsData,
}) => {
  const { id } = useParams();
  const [pastShows, setPastShows] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  const mixCloudAPICall = () => {
    if (selectedShow.data.mixcloud_playlist_url) {
      let playlist_url = selectedShow.data.mixcloud_playlist_url;
      // https://www.mixcloud.com/ehfm/playlists/lunch/

      let wwwCutPoint = playlist_url.indexOf(".") + 1;
      let modifiedUrl = playlist_url.slice(wwwCutPoint);
      const showsToReturn = `100`;

      axios
        .get(`https://api.${modifiedUrl}cloudcasts/?limit=${showsToReturn}`)
        .then((res) => {
          let shows = res.data.data.reverse();
          setPastShows(shows);
        });
    }
  };

  useEffect(() => {
    const findSelectedShow = () => {
      for (let show of residentsData) {
        if (show.uid === id) {
          setSelectedShow(show);
          mixCloudAPICall();
        }
      }
    };

    findSelectedShow();
  }, []);

  let titleString;

  if (selectedShow) {
    titleString = `${selectedShow.data.show_title} | EHFM`;
  }

  return (
    <React.Fragment>
      {selectedShow ? (
        <React.Fragment>
          <Helmet>
            <title>{titleString}</title>
            <meta name="fragment" content="!" />
            <meta
              property="og:title"
              data-react-helmet="true"
              content={titleString}
            />
            <meta
              name="description"
              data-react-helmet="true"
              content={selectedShow.data.show_description}
            />
            <meta
              property="og:description"
              data-react-helmet="true"
              content={selectedShow.data.show_description}
            />
            <meta
              property="og:url"
              data-react-helmet="true"
              content={window.location.href}
            />
            <meta
              name="twitter:image"
              data-react-helmet="true"
              content={selectedShow.data.show_image.larger.url}
            />
            <meta
              property="og:image"
              data-react-helmet="true"
              content={selectedShow.data.show_image.larger.url}
            />
            <meta
              property="og:image:width"
              content={selectedShow.data.show_image.dimensions.width}
            />
            <meta
              property="og:image:height"
              content={selectedShow.data.show_image.dimensions.height}
            />
          </Helmet>
          <BackgroundImage
            mixCloudWidget={mixcloudWidgetHtml}
            imageSrc={selectedShow.data.show_image.fullscreen.url}
          />
          <Wrapper mixCloudWidget={mixcloudWidgetHtml}>
            <ResidentProfile
              cookies={cookies}
              showTitle={selectedShow.data.show_title}
              showDescription={selectedShow.data.show_description}
              showImage={selectedShow.data.show_image.fullscreen.url}
              showId={selectedShow.uid}
              facebook={selectedShow.data.socials[0].facebook}
              twitter={selectedShow.data.socials[0].twitter}
              instagram={selectedShow.data.socials[0].instagram}
              showTime={selectedShow.data.show_time}
              pastShows={pastShows}
              mixCloudWidget={mixcloudWidgetHtml}
              handleMixCloudClick={handleMixCloudClick}
            />
          </Wrapper>
        </React.Fragment>
      ) : (
        <p>Loading</p>
      )}
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default ResidentShowContainer;
