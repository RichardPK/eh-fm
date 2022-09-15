import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnAir from "../players/player/on-air/OnAir";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import { Heading2, Body } from "../text-elements/index";
import {
  SHOW_NOT_FOUND,
  getShowInPrismic,
  parseShowName,
  sanitiseString,
} from "../../helpers/PrismicHelper";
import Colors from "../../consts/Colors";
import Image from "../image/Image";
import PlaceholderImage from "../../assets/images/placeholder-showimg.jpg";
import HoveredLine from "../hoverLine/HoverLine";

const CurrentShow = ({ currentShow, residentsData }) => {
  const [prismicShow, setPrismicShow] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (currentShow && residentsData)
      setPrismicShow(getShowInPrismic({ residentsData, currentShow }));
  }, [currentShow, residentsData]);

  const airTimeShowImgUrl = () => {
    return currentShow && currentShow.image_path;
  };

  const prismicShowImgUrl = () => {
    return (
      prismicShow &&
      prismicShow !== SHOW_NOT_FOUND &&
      prismicShow.data.show_image.url.split("&")[0]
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
          fit={"crop"}
        />
      );
    } else if (airTimeShowImgUrl()) {
      return <Image baseUrl={airTimeShowImgUrl()} alt="current live show" />;
    } else {
      return <Image baseUrl={PlaceholderImage} alt="ehfm placeholder" />;
    }
  };

  const returnShowDescription = () => {
    if (prismicShow && prismicShow.data && prismicShow.data.show_description) {
      return sanitiseString(prismicShow.data.show_description);
    }

    if (currentShow && currentShow.description) {
      return sanitiseString(currentShow.description);
    }

    return "Edinburgh Community Radio.";
  };

  return (
    <Wrapper>
      <OnAirWrapper>
        <OnAir on={Boolean(currentShow)} />
      </OnAirWrapper>
      <CurrentShowImageWrapper>{returnImage()}</CurrentShowImageWrapper>
      <InfoWrapper>
        {currentShow && prismicShow === SHOW_NOT_FOUND ? (
          <NameWrapper>
            <ShowName>{parseShowName(currentShow)}</ShowName>
          </NameWrapper>
        ) : null}
        {currentShow && prismicShow && prismicShow.uid ? (
          <Link to={`/residents/${(prismicShow && prismicShow.uid) || ""}`}>
            <NameWrapper
              onMouseOver={() => {
                setHovered(true);
              }}
              onMouseOut={() => {
                setHovered(false);
              }}
            >
              <ShowName>{parseShowName(currentShow)}</ShowName>
              <HoveredLine
                hovered={hovered}
                width={"100%"}
                placeholderWidth={"3rem"}
                placeholder
              />
            </NameWrapper>
          </Link>
        ) : null}
        {!currentShow ? (
          <NameWrapper>
            <ShowName>We are currently offline.</ShowName>
          </NameWrapper>
        ) : null}
        <DescriptionWrapper>
          <ShowDescription>{returnShowDescription()}</ShowDescription>
        </DescriptionWrapper>
      </InfoWrapper>
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
  }
`;

const OnAirWrapper = styled.div`
  position: absolute;
  top: -5;
  left: 0;
  z-index: 2;
`;

const CurrentShowImageWrapper = styled.div`
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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

const ShowName = styled(Heading2)`
  color: ${Colors.playerWhite};
`;

const NameWrapper = styled.div`
  position: relative;
  background-color: ${Colors.notQuiteBlack(0.75)};
  padding: 4px;
`;

const DescriptionWrapper = styled.div`
  background-color: ${Colors.notQuiteBlack(0.75)};
  padding: 4px;
  margin-top: 0.25rem;
`;

const ShowDescription = styled(Body)`
  color: ${Colors.playerWhite};
`;

export default CurrentShow;
