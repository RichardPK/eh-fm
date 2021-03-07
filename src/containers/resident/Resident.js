import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ResidentProfile from "../../components/resident-profile/ResidentProfile";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";

const ResidentShowContainer = ({
  cookies,
  handleMixcloudClick,
  mixcloudWidgetHtml,
  residentsData,
}) => {
  const { id } = useParams();
  const [pastMixcloudShows, setPastMixcloudShows] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const findSelectedShow = () => {
      const foundShow = residentsData.filter(
        (showData) => showData.uid === id
      )[0];
      setSelectedShow(foundShow);
    };

    findSelectedShow();
  }, [id, residentsData]);

  useEffect(() => {
    const mixCloudAPICall = async () => {
      let playlistUrl = selectedShow.data.mixcloud_playlist_url;
      // https://www.mixcloud.com/ehfm/playlists/lunch/

      let wwwCutPoint = playlistUrl.indexOf(".") + 1;
      let modifiedUrl = playlistUrl.slice(wwwCutPoint);
      const showsToReturn = `100`;

      fetch(`https://api.${modifiedUrl}cloudcasts/?limit=${showsToReturn}`)
        .then((response) => response.json())
        .then((data) => {
          setPastMixcloudShows(data.data.reverse());
        });
    };

    selectedShow && mixCloudAPICall();
  }, [selectedShow]);

  return (
    <>
      {selectedShow ? (
        <>
          <Helmet>
            <title>{`${selectedShow.data.show_title} | EHFM`}</title>
            <meta name="fragment" content="!" />
            <meta
              property="og:title"
              data-react-helmet="true"
              content={`${selectedShow.data.show_title} | EHFM`}
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
          <Wrapper>
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
              pastMixcloudShows={pastMixcloudShows}
              mixcloudWidgetHtml={mixcloudWidgetHtml}
              handleMixcloudClick={handleMixcloudClick}
            />
          </Wrapper>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default ResidentShowContainer;
