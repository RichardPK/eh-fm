import React, { useEffect, useState } from 'react';
import ListenNowButton from '../listen-now-button/ListenNowButton';
import OnAir from '../side-player/player/on-air/OnAir';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Heading4, Heading3, Body } from '../text-elements/index';
import { getShowInPrismic, parseShowName, sanitiseString } from '../../helpers/PrismicHelper';
import Colors from '../../consts/Colors';
import Image from '../image/Image';
import PlaceholderImage from '../../assets/images/placeholder-showimg.jpg';

const CurrentShow = ({ currentShow, residents, playing, handlePlayPauseClicked }) => {
  const [prismicShow, setPrismicShow] = useState(null);

  useEffect(() => {
    setPrismicShow(getShowInPrismic({ residents, currentShow }));
  }, [prismicShow]);

  const airTimeShowImgUrl = () => {
    return currentShow && currentShow.currentShow[0].image_path;
  };

  const prismicShowImgUrl = () => {
    return (
      prismicShow && prismicShow !== 'SHOW_NOT_FOUND' && prismicShow.show_image.url.split('&')[0]
    );
  };

  const returnImage = () => {
    if (prismicShowImgUrl()) {
      return (
        <Image
          baseUrl={prismicShowImgUrl()}
          width={500}
          height={600}
          alt="current live show"
          fit={'crop'}
        />
      );
    } else if (airTimeShowImgUrl()) {
      return <Image baseUrl={airTimeShowImgUrl()} alt="current live show" />;
    } else {
      return <Image baseUrl={PlaceholderImage} alt="ehfm placeholder" />;
    }
  };

  const returnShowDescription = () => {
    let currentShowDescription = null;
    if (prismicShow && prismicShow.show_description) {
      return sanitiseString(prismicShow.show_description);
    }
    if (currentShow !== null) {
      let showData = currentShow;
      currentShowDescription = showData.currentShow[0].description;
      if (currentShowDescription === '') {
        currentShowDescription = 'Independent community radio for Edinburgh.';
        return currentShowDescription;
      } else {
        return sanitiseString(currentShowDescription);
      }
    }
  };

  return (
    <Wrapper onClick={handlePlayPauseClicked}>
      <OnAirWrapper>
        <OnAir />
      </OnAirWrapper>
      {prismicShow ? (
        <>
          <CurrentShowImageWrapper>{returnImage()}</CurrentShowImageWrapper>
          <InfoWrapper>
            <NameWrapper>
              <ShowName>{parseShowName(currentShow)}</ShowName>
            </NameWrapper>
            <DescriptionWrapper>
              <ShowDescription>{returnShowDescription()}</ShowDescription>
            </DescriptionWrapper>
          </InfoWrapper>
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media ${Devices.tablet} {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;

const OnAirWrapper = styled.div`
  position: absolute;
  top: -5;
  left: 0;
`;

const CurrentShowImageWrapper = styled.div`
  height: 100%;
  width: 100%;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 100%;
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 1rem;
  bottom: 1rem;
  margin-right: 1rem;

  @media ${Devices.mobileL} {
    /* margin-right: 16px; */
  }
`;

const ShowName = styled(Heading3)`
  color: ${Colors.playerWhite};
`;

const NameWrapper = styled.div`
  background-color: ${Colors.notQuiteBlackCustom(0.75)};
  padding: 4px;
`;

const DescriptionWrapper = styled.div`
  background-color: ${Colors.notQuiteBlackCustom(0.75)};
  padding: 4px;
  margin-top: 0.25rem;
`;

const ShowDescription = styled(Body)`
  color: ${Colors.playerWhite};
`;

export default CurrentShow;
