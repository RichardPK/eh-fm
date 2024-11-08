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
import LinkButtonContainer from "../../components/text-page-content-components/GroundfloorLinkButtonContainer";
import { gridStyles } from "../../consts/gridStyles";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles } from "../../consts/Styles";
import Colors from "../../consts/Colors";

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100vh;
  position: fixed;
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
  padding-bottom: 2.5rem;
`;

const GFLogoContainer = styled.div`
  background-color: ${Colors.spanBg};
  margin-bottom: 1rem;

  ${gridStyles}
`;

const Menu = styled.div`
  margin-bottom: 2rem;
  ${gridStyles}
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
    links,
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
        url="https://www.ehfm.live/groundfloor"
        imageSrc={metaDataImageUrl}
        description="Ground Floor is a cafe based on Great Junction Street in Leith, operated by EHFM and home to our radio studio"
        imageWidth="800px"
        imageHeight="800px"
      />
      <StyledBackgroundImage imageSrc={bgImageUrl} />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        <InnerWrapper>
          <GFLogoContainer>
            <img src='/gf-logo.png' alt="Groundfloor" style={{ width: '100%', height: 'auto' }} />
          </GFLogoContainer>
          <StyledBodyParagraphs aboutText={description} />
          <Menu>
            <img src="/groundfloor-menu-nov-2024.png" alt="Groundfloor Menu" style={{ width: '100%', height: 'auto', opacity: 0.95 }} />
          </Menu>
          <LinkButtonContainer support_urls={links} />
        </InnerWrapper>

      </Wrapper>
    </>
  );
};

export default Support;
