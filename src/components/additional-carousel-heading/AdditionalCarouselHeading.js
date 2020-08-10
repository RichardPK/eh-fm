import React, { useEffect, useState } from 'react';
import CurrentShow from '../../components/current-show/CurrentShow';
import Schedule from '../../components/schedule/Schedule';
import { Helmet } from 'react-helmet';
import Prismic from 'prismic-javascript';
import styled from 'styled-components/macro';
import Colors from '../../consts/Colors';
import Devices from '../../consts/Devices';
import Sizes from '../../consts/Sizes';
import { Heading4, Body } from '../../components/text-elements/index';
import PlaceholderShowImg from '../../assets/images/placeholder-showimg.jpg';
import Carousel from '../../components/carousel/Carousel';

const HomeContainer = ({ carouselName }) => {
  return (
    <HeadingWrapper>
      <AdditionalCarouselHeading>{carouselName}</AdditionalCarouselHeading>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
    </HeadingWrapper>
  );
};

const DividerWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto 0 auto 0.75rem;
`;

const Divider = styled.div`
  height: 2px;
  width: calc(80% - 3rem);
  background-color: ${Colors.notQuiteBlack(0.1)};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 0 0 0.75rem 0;
`;

const AdditionalCarouselHeading = styled(Heading4)`
  color: ${Colors.notQuiteBlack(0.5)};
  white-space: nowrap;
  font-weight: normal;
`;

export default HomeContainer;
