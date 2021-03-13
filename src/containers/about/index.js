import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";
import TopSection from "./TopSection";
import GetInvolvedContainer from "./GetInvolvedContainer";
import BodyParagraphs from "./BodyParagraphs";
import MetaData from "../../components/metadata/MetaData";
import GetImageUrl from "../../helpers/GetImageUrl";
import { DeviceInfoContext } from "../../contexts/DeviceInfoContext";
import { PagePaddingStyles } from "../../consts/Styles";

const StyledBackgroundImage = styled(BackgroundImage)`
  top: 86px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 196px - 3.5rem);
  margin: 46px auto ${(props) => (props.mixCloudWidget ? `103px` : 0)};
  ${PagePaddingStyles}

  @media ${Devices.tablet} {
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);
    margin: 2.5rem 0;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
`;

const About = ({ pageData }) => {
  const [cookies] = useCookies(["ehfm"]);
  const { viewportWidth } = useContext(DeviceInfoContext);

  const {
    about,
    get_involved_details,
    image,
    subheader,
    headline,
  } = pageData.data;

  const metaDataImageUrl = GetImageUrl({
    baseUrl: image.url,
    width: "800",
    height: "800",
  });

  const bgImageSize = 1.5 * viewportWidth;

  const bgImageUrl = GetImageUrl({
    baseUrl: image.url,
    width: bgImageSize,
    height: bgImageSize,
  });

  return (
    <>
      <MetaData
        title={"About | EHFM"}
        imageSrc={metaDataImageUrl}
        description={
          "EHFM is an online community radio station broadcasting from Edinburgh’s Summerhall."
        }
        url="https://www.ehfm.live/about"
        imageWidth="800px"
        imageHeight="800px"
      />
      <StyledBackgroundImage imageSrc={bgImageUrl} />
      <Wrapper>
        <InnerWrapper>
          <TopSection headline={headline} subheader={subheader} />
          <BodyParagraphs aboutText={about} />
          <GetInvolvedContainer get_involved_details={get_involved_details} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
