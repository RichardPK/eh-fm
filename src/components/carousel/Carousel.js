import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import PrimaryCarouselItem from '../carousel-items/primary-carousel-item/PrimaryCarouselItem';
import SecondaryCarouselItem from '../carousel-items/secondary-carousel-item/SecondaryCarouselItem';
import Colors from '../../consts/Colors';
import { isInternal, splitUrl } from '../../helpers/CarouselLinkHelper';

const Carousel = ({ data, hierarchy }) => {
  const [carouselRef, setCarouselRef] = useState(null);
  const history = useHistory();

  const params = {
    slidesPerView: hierarchy === 'primary' ? 3.3 : 6.3,
    loop: true,
    loopFillGroupWithBlank: true,
    loopAdditionalSlides: 4,
    spaceBetween: hierarchy === 'primary' ? 60 : 30,
    speed: 400,
    autoplay: {
      delay: hierarchy === 'primary' ? 10000 : 10000,
      disableOnInteraction: false
    }
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

  console.log(carouselRef ? carouselRef.autoplay.running : null);

  return (
    <Wrapper hierarchy={hierarchy}>
      {data.length > 0 ? (
        <Swiper
          {...params}
          getSwiper={(swiperEl) => {
            setCarouselRef(swiperEl);
          }}
        >
          {data.map((carouselItemData) => {
            return (
              <div key={carouselItemData.id}>
                {hierarchy === 'primary' ? (
                  <PrimaryCarouselItem
                    data={carouselItemData.data}
                    hierarchy={hierarchy}
                    handleCarouselItemClick={handleCarouselItemClick}
                    carouselRef={carouselRef}
                  />
                ) : (
                  <SecondaryCarouselItem
                    data={carouselItemData.data}
                    hierarchy={hierarchy}
                    handleCarouselItemClick={handleCarouselItemClick}
                    carouselRef={carouselRef}
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

export default Carousel;
