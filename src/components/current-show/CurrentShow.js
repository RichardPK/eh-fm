import React, { useEffect, useState } from 'react';
import ListenNowButton from '../listen-now-button/ListenNowButton';
import OnAir from '../side-player/player/on-air/OnAir';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Heading4, Heading3, Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import Image from '../image/Image';
import PlaceholderImage from '../../assets/images/placeholder-showimg.jpg';

const CurrentShow = (props) => {
  const [prismicShow, setPrismicShow] = useState(null);
  const SHOW_NOT_FOUND = 'SHOW_NOT_FOUND';

  useEffect(() => {
    getShowInPrismic();
  }, [prismicShow]);

  const getShowInPrismic = () => {
    let toLowerCase;
    const currentShowName = parseShowName();
    if (currentShowName) {
      toLowerCase = currentShowName.toLowerCase();
    }
    if (props.residents.length > 0 && toLowerCase) {
      const filtered = props.residents.filter((resident) =>
        toLowerCase.includes(resident.data.show_title.toLowerCase())
      );
      if (filtered.length > 0) {
        setPrismicShow(filtered[0].data);
      } else {
        setPrismicShow(SHOW_NOT_FOUND);
      }
    }
  };

  const parseShowName = () => {
    let currentShowName = null;
    if (props.currentShow !== null) {
      let showData = props.currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
      return parsedForAmpersands;
    }
    return currentShowName;
  };

  const airTimeShowImgUrl = () => {
    return props.currentShow && props.currentShow.currentShow[0].image_path;
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
          height={500}
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
    if (props.currentShow !== null) {
      let showData = props.currentShow;
      currentShowDescription = showData.currentShow[0].description;
      if (currentShowDescription === '') {
        currentShowDescription = 'Independent community radio for Edinburgh.';
        return currentShowDescription;
      } else {
        let parsedForInvertedCommas = currentShowDescription.replace(/&#039;/g, "'");
        let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
        return parsedForAmpersands;
      }
    }
  };

  return (
    <Wrapper>
      <OnAirWrapper>
        <OnAir />
      </OnAirWrapper>
      {prismicShow ? (
        <>
          <CurrentShowImageWrapper>{returnImage()}</CurrentShowImageWrapper>
          <InfoWrapper>
            <NameWrapper>
              <ShowName>{parseShowName()}</ShowName>
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
  position: relative;
  overflow: hidden;

  @media ${Devices.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const OnAirWrapper = styled.div`
  position: absolute;
  top: -5;
  left: 0;
`;

const CurrentShowImageWrapper = styled.div`
  /* height: 100%; */
  width: 100%;

  img {
    border-radius: 5px;
    /* height: auto; */
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
