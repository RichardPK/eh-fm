import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import { Helmet } from "react-helmet";
import ResidentListItem from "../../components/resident-list-item/ResidentListItem";
import PlaceholderShowImg from "../../assets/images/placeholder-showimg.jpg";
import Devices from "../../consts/Devices";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";

const ResidentsContainer = ({ residentsData }) => {
  const { mixCloudWidget } = useContext(MixcloudWidgetContext);
  const [cookies] = useCookies(["ehfm"]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Residents | EHFM</title>
        <meta name="fragment" content="!" />
        <meta
          property="og:title"
          data-react-helmet="true"
          content="Residents | EHFM"
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
      <Wrapper
        mixCloudWidget={mixCloudWidget}
        cookiesBannerShowing={cookies.ehfm !== "1"}
      >
        {residentsData.map((show, index) => {
          return (
            <ResidentListItem
              show={show}
              index={index}
              key={index}
              showTitle={show.data.show_title}
              thumbnailImage={show.data.show_image.url}
              showId={show.uid}
            />
          );
        })}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem auto
    ${(props) =>
      props.cookiesBannerShowing ? "70px" : props.mixCloudWidget ? `123px` : 0};

  @media ${Devices.tablet} {
    margin: 2.5rem auto
      ${(props) =>
        props.cookiesBannerShowing
          ? "95px"
          : props.mixCloudWidget
          ? `123px`
          : 0};
  }
`;

export default ResidentsContainer;
