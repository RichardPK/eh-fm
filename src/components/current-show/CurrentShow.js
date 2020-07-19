import React, { Component } from 'react';
import ListenNowButton from '../listen-now-button/ListenNowButton';
import OnAir from '../side-player/player/on-air/OnAir';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Heading4, Heading3, Body } from '../text-elements/index';
import Colors from '../../consts/Colors';

const CurrentShowDetail = (props) => {
  const returnShowName = () => {
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

  const findShowUrlInPrismic = () => {
    let result;
    let toLowerCase;
    const currentShowName = returnShowName();
    if (currentShowName) {
      toLowerCase = currentShowName.toLowerCase();
    }
    if (props.residents.length > 0 && toLowerCase) {
      const filtered = props.residents.filter((resident) =>
        toLowerCase.includes(resident.data.show_title.toLowerCase())
      );
      if (filtered.length > 0) {
        result = filtered[0].data.show_image.larger.url;
      }
    }

    return result;
  };

  const returnShowImgUrl = () => {
    let linkedPrismicImg = findShowUrlInPrismic();

    if (linkedPrismicImg) {
      return linkedPrismicImg;
    } else {
      let currentShowImgUrl = null;
      if (props.currentShow !== null) {
        let showData = props.currentShow;
        currentShowImgUrl = showData.currentShow[0].image_path;
      }
      if (currentShowImgUrl === '') {
        currentShowImgUrl = './placeholder-showimg.jpg';
      }
      return currentShowImgUrl;
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
      <ImageWrapper>
        <CurrentShowImage
          className="currentshow-img"
          src={returnShowImgUrl()}
          alt="current live show"
        />
      </ImageWrapper>
      <InfoWrapper>
        <NameWrapper>
          <ShowName>{returnShowName()}</ShowName>
        </NameWrapper>
        <DescriptionWrapper>
          <ShowDescription>{returnShowDescription()}</ShowDescription>
        </DescriptionWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;

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

const ImageWrapper = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: inherit;
  z-index: -1;
`;

const CurrentShowImage = styled.img`
  height: auto;
  margin: 0px 0px 0px 0px;
  width: 100%;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  left: 15px;
  bottom: 15px;
  margin-right: 15px;

  @media ${Devices.mobileL} {
    /* margin-right: 16px; */
  }
`;

const ShowName = styled(Heading3)``;

const NameWrapper = styled.div`
  display: inline-block;
  background-color: ${Colors.notquiteBlack80Transparent};
  padding: 4px;
`;

const DescriptionWrapper = styled.div`
  display: inline-block;
  background-color: ${Colors.notquiteBlack80Transparent};
  padding: 4px;
  margin-right: 10%;
  margin-top: 2rem;

  @media ${Devices.tablet} {
    margin-right: 25%;
  }
`;

const ShowDescription = styled(Body)``;

export default CurrentShowDetail;
