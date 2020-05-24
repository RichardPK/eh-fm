import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Body, Tiny } from '../../text-elements/index';
import Colors from '../../../consts/Colors';
import Image from '../../image/Image';

const SecondaryCarouselItem = ({ data, hierarchy }) => {
  let [hovered, setHovered] = useState(false);

  const handleClick = (link, type) => {
    if (type.toLowerCase() === 'link') {
      window.location = link.url;
    }
  };

  return (
    <Wrapper
      hierarchy={hierarchy}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      onClick={() => {
        handleClick(data.link, data.type);
      }}
    >
      <ImageWrapper hovered={hovered}>
        <Image baseUrl={data.image.url} width={350} height={150} fit="crop" />
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
  width: 100%;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem 2rem;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  padding-top: 0.5rem;
  /* justify-content: flex-start; */
`;

const CategoryBody = styled(Body)`
  color: ${Colors.altBlue};
  padding-bottom: 2px;
`;

const HeadingBody = styled(Body)``;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  opacity: ${(props) => (props.hovered ? 0.8 : 1)};
  transition: opacity, 0.2s ease-out;
`;

export default SecondaryCarouselItem;
