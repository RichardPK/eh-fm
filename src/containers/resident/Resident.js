import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import MetaData from "../../components/metadata/MetaData";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { DeviceInfoContext } from "../../contexts/DeviceInfoContext";
import GetImageUrl from "../../helpers/GetImageUrl";
import ResidentProfile from "../../components/resident-profile/ResidentProfile";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100vh;
`;

const ResidentShowContainer = ({ residentsData }) => {
  const { id } = useParams();
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml, handleMixcloudClick } = useContext(
    MixcloudWidgetContext
  );
  const { viewportWidth } = useContext(DeviceInfoContext);

  const [pastMixcloudShows, setPastMixcloudShows] = useState(null);
  const [loadingShows, setLoadingShows] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const findSelectedShow = () => {
      const foundShow = residentsData.filter(
        (showData) => showData.uid === id
      )[0];
      if (foundShow) {
        setSelectedShow(foundShow.data);
      }
    };

    findSelectedShow();
  }, [id, residentsData]);

  useEffect(() => {
    const mixCloudAPICall = async () => {
      const playlistUrl = selectedShow.mixcloud_playlist_url;
      if (!playlistUrl) {
        setPastMixcloudShows([]);
        return;
      }

      setLoadingShows(true);
      setPastMixcloudShows(null);
      // https://www.mixcloud.com/ehfm/playlists/lunch/

      let wwwCutPoint = playlistUrl.indexOf(".") + 1;
      let modifiedUrl = playlistUrl.slice(wwwCutPoint);

      let allShows = [];
      let nextUrl = `https://api.${modifiedUrl}cloudcasts/?limit=100`;

      try {
        while (nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();
          allShows = allShows.concat(data.data);
          nextUrl = data.paging && data.paging.next ? data.paging.next : null;
        }
        setPastMixcloudShows(allShows.reverse());
      } catch (err) {
        setPastMixcloudShows([]);
      } finally {
        setLoadingShows(false);
      }
    };

    selectedShow && mixCloudAPICall();
  }, [selectedShow]);

  const bgImageSize = 1.5 * viewportWidth;

  const bgImageUrl = GetImageUrl({
    baseUrl: selectedShow && selectedShow.show_image?.fullscreen?.url,
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
            imageSrc={selectedShow.show_image?.larger?.url}
            imageWidth={selectedShow.show_image?.dimensions?.width}
            imageHeight={selectedShow.show_image?.dimensions?.height}
          />
          <StyledBackgroundImage imageSrc={bgImageUrl} />
          <ResidentProfile
            cookies={cookies}
            selectedShow={selectedShow}
            pastMixcloudShows={pastMixcloudShows}
            loadingShows={loadingShows}
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
