import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { Body, Tiny } from "../../text-elements/index";
import Colors from "../../../consts/Colors";
import Image from "../../image/Image";

const SecondaryCarouselItem = ({
  data,
  hierarchy,
  handleCarouselItemClick,
  carouselRef,
  index,
}) => {
  let [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      hierarchy={hierarchy}
      onMouseOver={() => {
        setHovered(true);
        // carouselRef.autoplay.stop();
      }}
      onMouseOut={() => {
        setHovered(false);
        // carouselRef.autoplay.start();
      }}
      onClick={() => {
        handleCarouselItemClick(data.link, data.type, index, hierarchy);
      }}
    >
      <ImageWrapper hovered={hovered}>
        <Image baseUrl={data.image.url} width={350} height={350} fit="crop" />
      </ImageWrapper>
      <TextWrapper>
        <CategoryBody>{data.category}</CategoryBody>
        <HeadingBody>{data.headline}</HeadingBody>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  padding-top: 0.5rem;
`;

const CategoryBody = styled(Body)`
  color: ${Colors.ehfmPrimary()};
  padding-bottom: 2px;
`;

const HeadingBody = styled(Body)`
  font-weight: normal;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  opacity: ${(props) => (props.hovered ? 0.8 : 1)};
  transition: opacity, 0.2s ease-out;
`;

export default SecondaryCarouselItem;
