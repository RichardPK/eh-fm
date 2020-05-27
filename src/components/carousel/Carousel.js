import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import PrimaryCarouselItem from '../carousel-items/primary-carousel-item/PrimaryCarouselItem';
import SecondaryCarouselItem from '../carousel-items/secondary-carousel-item/SecondaryCarouselItem';
import Colors from '../../consts/Colors';
import { isInternal, splitUrl } from '../../helpers/CarouselLinkHelper';

const HighlightsCarousel = ({ data, hierarchy }) => {
  const history = useHistory();

  const params = {
    slidesPerView: hierarchy === 'primary' ? 3.3 : 6.3,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: hierarchy === 'primary' ? 60 : 30
  };

  const handleCarouselItemClick = (link, type) => {
    const url = link.url;
    if (type.toLowerCase() === 'link') {
      if (isInternal(url)) {
        history.push(splitUrl(url));
      } else {
        window.open(url, '_blank');
      }
    }
  };

  return (
    <Wrapper hierarchy={hierarchy}>
      {data.length > 0 ? (
        <Swiper {...params}>
          {data.map((carouselItemData) => {
            return (
              <div key={carouselItemData.id}>
                {hierarchy === 'primary' ? (
                  <PrimaryCarouselItem
                    data={carouselItemData.data}
                    hierarchy={hierarchy}
                    handleCarouselItemClick={handleCarouselItemClick}
                  />
                ) : (
                  <SecondaryCarouselItem
                    data={carouselItemData.data}
                    hierarchy={hierarchy}
                    handleCarouselItemClick={handleCarouselItemClick}
                  />
                )}
              </div>
            );
          })}
        </Swiper>
      ) : null}
      {hierarchy === 'primary' ? <Divider /> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Divider = styled.div`
  margin: 2rem;
  height: 2px;
  /* width: 100%; */
  background-color: ${Colors.softGrey};
`;

export default HighlightsCarousel;
