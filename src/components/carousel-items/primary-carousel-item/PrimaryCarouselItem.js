import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { Heading4, Body } from "../../text-elements/index";
import Colors from "../../../consts/Colors";
import Image from "../../image/Image";
import CarouselButton from "../../carousel-button/CarouselButton";

const PrimaryCarouselItem = ({
  data,
  hierarchy,
  handleCarouselItemClick,
  carouselRef,
}) => {
  let [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      hierarchy={hierarchy}
      onMouseOver={() => {
        // console.log('hovered' + data.headline);
        setHovered(true);
        carouselRef && carouselRef.autoplay.stop();
      }}
      onMouseOut={() => {
        setHovered(false);
        carouselRef && carouselRef.autoplay.start();
      }}
      onClick={() => {
        handleCarouselItemClick(data.link, data.type);
      }}
    >
      <TextWrapper>
        <CategoryBody>{data.category}</CategoryBody>
        <Heading4>{data.headline}</Heading4>
        <FlavourHeading>{data.flavour_text}</FlavourHeading>
      </TextWrapper>
      <ImageWrapper hovered={hovered}>
        <Image baseUrl={data.image.url} width={900} height={600} fit="crop" />
        <ButtonWrapper>
          <CarouselButton
            type={data.type}
            hierarchy={hierarchy}
            hovered={hovered}
            customText={data.custom_link_text}
          />
        </ButtonWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 0 3rem;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  padding-bottom: 0.5rem;
  grid-row: 1/2;
  /* justify-content: flex-start; */
`;

const CategoryBody = styled(Body)`
  color: ${Colors.altBlueText()};
  padding-bottom: 4px;
`;

const FlavourHeading = styled(Heading4)`
  color: ${Colors.notQuiteBlack(0.6)};
`;

const ImageWrapper = styled.div`
  grid-row: 2/2;
  /* width: 100%; */

  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  opacity: ${(props) => (props.hovered ? 0.8 : 1)};
  transition: opacity, 0.2s ease-out;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default PrimaryCarouselItem;
