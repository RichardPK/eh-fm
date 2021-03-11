import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import MetaData from "../../components/metadata/MetaData";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { DeviceInfoContext } from "../../contexts/DeviceInfoContext";
import GetImageUrl from "../../helpers/GetImageUrl";
import { WidgetMarginStyles } from "../../consts/Styles";
import ResidentProfile from "../../components/resident-profile/ResidentProfile";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";

const Wrapper = styled.div`
  ${(props) => WidgetMarginStyles(props)}
`;

const ResidentShowContainer = ({ residentsData }) => {
  const { id } = useParams();
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml, handleMixcloudClick } = useContext(
    MixcloudWidgetContext
  );
  const { viewportWidth } = useContext(DeviceInfoContext);

  const [pastMixcloudShows, setPastMixcloudShows] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const findSelectedShow = () => {
      const foundShow = residentsData.filter(
        (showData) => showData.uid === id
      )[0];
      setSelectedShow(foundShow.data);
    };

    findSelectedShow();
  }, [id, residentsData]);

  useEffect(() => {
    const mixCloudAPICall = async () => {
      let playlistUrl = selectedShow.mixcloud_playlist_url;
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

  const bgImageSize = 1.5 * viewportWidth;

  const bgImageUrl = GetImageUrl({
    baseUrl: selectedShow && selectedShow.show_image.fullscreen.url,
    width: bgImageSize,
    height: bgImageSize,
  });

  return (
    <>
      {selectedShow ? (
        <>
          <MetaData
            title={`${selectedShow.show_title} | EHFM`}
            description={selectedShow.show_description}
            imageSrc={selectedShow.show_image.larger.url}
            imageWidth={selectedShow.show_image.dimensions.width}
            imageHeight={selectedShow.show_image.dimensions.height}
          />
          <BackgroundImage imageSrc={bgImageUrl} />
          <ResidentProfile
            cookies={cookies}
            selectedShow={selectedShow}
            pastMixcloudShows={pastMixcloudShows}
            mixcloudWidgetHtml={mixcloudWidgetHtml}
            handleMixcloudClick={handleMixcloudClick}
          />
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
export default ResidentShowContainer;
