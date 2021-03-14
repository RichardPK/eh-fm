import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";
import MetaData from "../../components/metadata/MetaData";
import GetImageUrl from "../../helpers/GetImageUrl";
import { DeviceInfoContext } from "../../contexts/DeviceInfoContext";
import { PagePaddingStyles } from "../../consts/Styles";
import TopTextContainer from "../../components/text-page-content-components/TopTextContainer";
import BodyParagraphs from "../../components/text-page-content-components/BodyParagraphs";
import LinkButtonContainer from "../../components/text-page-content-components/SupportLinkButtonContainer";
import { gridStyles } from "../../consts/gridStyles";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles } from "../../consts/Styles";

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100vh;
`;

const Wrapper = styled.div`
  ${PagePaddingStyles}
  ${(props) => WidgetMarginStyles(props)};

  @media ${Devices.tablet} {
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
`;

const StyledBodyParagraphs = styled(BodyParagraphs)`
  ${gridStyles}
`;

const Support = ({ pageData }) => {
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml } = useContext(MixcloudWidgetContext);
  const { viewportWidth } = useContext(DeviceInfoContext);

  const {
    banner_image,
    heading,
    subheading,
    support_urls,
    description,
  } = pageData.data;

  const metaDataImageUrl = GetImageUrl({
    baseUrl: banner_image.url,
    width: "800",
    height: "800",
  });

  const bgImageSize = 1.5 * viewportWidth;

  const bgImageUrl = GetImageUrl({
    baseUrl: banner_image.url,
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
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        <InnerWrapper>
          <TopTextContainer headline={heading} subheader={subheading} />
          <StyledBodyParagraphs aboutText={description} />
          <LinkButtonContainer support_urls={support_urls} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Support;
