import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";
import MetaData from "../../components/metadata/MetaData";
import GetImageUrl from "../../helpers/GetImageUrl";
import { DeviceInfoContext } from "../../contexts/DeviceInfoContext";

const StyledBackgroundImage = styled(BackgroundImage)`
  top: 86px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 196px - 3.5rem);
  margin: 46px auto ${(props) => (props.mixCloudWidget ? `103px` : 0)};

  padding: 0 1rem;

  @media ${Devices.mobileL} {
    padding: 0 2rem;
  }

  @media ${Devices.tablet} {
    padding: 0 3rem;
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
    banner_image,
    buttons,
    buttons_description,
    heading,
    subheading,
    support_urls,
  } = pageData.data;

  const metaDataImageUrl = GetImageUrl({
    baseUrl: banner_image.url,
    width: "800",
    height: "800",
  });

  const bgImageSize = 2 * viewportWidth;

  const bgImageUrl = GetImageUrl({
    baseUrl: banner_image,
    width: bgImageSize,
    height: bgImageSize,
  });

  return (
    <>
      <MetaData
        title={"Support | EHFM"}
        url="https://www.ehfm.live/support"
        imageSrc={metaDataImageUrl}
        description="Help support your local community radio station"
        imageWidth="800px"
        imageHeight="800px"
      />
      <StyledBackgroundImage imageSrc={bgImageUrl} />
      <Wrapper>
        <InnerWrapper></InnerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
