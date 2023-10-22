import React, { useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import { Cta } from "../text-elements/index";
import Image from "../image/Image";
import HoverLine from "../hoverLine/HoverLine";
import moment from "moment";

const LatestShowItem = ({
  thumbnailImage,
  showTitle,
  handleMixcloudClick,
  showKey,
  tags,
  publishDate,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      onClick={() => handleMixcloudClick(showKey)}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <ImageWrapper>
        <ShowImage baseUrl={thumbnailImage} alt="show presenters" />
      </ImageWrapper>
      <DateHeader>{moment(publishDate).format("DD.MM.YY")}</DateHeader>
      <ShowTitle>{showTitle}</ShowTitle>
      <TagUl>
        {tags.map((tag) => (
          <TagLi>{tag}</TagLi>
        ))}
      </TagUl>
      <HoverLine
        zIndex={10}
        hovered={hovered}
        placeholderWidth="2rem"
        width="100%"
        placeholder
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 265px;
  padding: 5px 5px 4px 5px;
  border-radius: ${Sizes.buttonRadius}px;
  margin: 15px 5px;
  background: white;
  /* border-bottom: 2px solid ${Colors.ehfmPrimary()}; */
  // height: 190px;
  width: 70vw;
  cursor: pointer;

  @media ${Devices.mobileL} {
    // height: 140px;
    width: 30vw;
    margin: 1rem 0.75rem 1rem 1rem;
  }

  @media ${Devices.tablet} {
    // height: 190px;
    width: 20vw;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  overflow: hidden;
  transition: all, 0.2s ease-out;

  @media ${Devices.tablet} {
    &:hover {
      img {
        opacity: 0.8;
      }
    }
  }
`;

const ShowImage = styled(Image)`
  width: auto;
  height: 265px;
  margin: 0px 0px 0px 0px;
`;

const ShowTitle = styled(Cta)`
  padding-top: 15px;
  color: ${Colors.notQuiteBlack()};
  font-weight: bold;
`;

const DateHeader = styled.p`
  margin: 0;
  padding-top: 5px;
  font-size: 12px;
`;

const TagUl = styled.ul`
  margin: 15px 0px;
  padding: 0px;
`;

const TagLi = styled.li`
  background: #02b398;
  color: white;
  display: inline-block;
  padding: 6px 6px;
  border-radius: 3px;
  margin-right: 2px;
  margin-bottom: 2px;
`;

export default LatestShowItem;
