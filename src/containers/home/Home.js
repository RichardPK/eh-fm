import React, { useEffect, useState } from 'react';
import CurrentShow from '../../components/current-show/CurrentShow';
import Schedule from '../../components/schedule/Schedule';
import { Helmet } from 'react-helmet';
import Prismic from 'prismic-javascript';
import styled from 'styled-components/macro';
import Colors from '../../consts/Colors';
import Devices from '../../consts/Devices';
import Sizes from '../../consts/Sizes';
import { Heading4 } from '../../components/text-elements/index';
import PlaceholderShowImg from '../../assets/images/placeholder-showimg.jpg';
import Carousel from '../../components/carousel/Carousel';

const HomeContainer = (props) => {
  const apiEndpoint = 'https://ehfm.cdn.prismic.io/api/v2';
  const PrimaryCarousel = Carousel;

  const [allCarouselItems, setAllCarouselItems] = useState([]);
  const [highlightedCarouselItems, setHighlightedCarouselItems] = useState([]);

  const [additionalCarousels, setAdditionalCarousels] = useState([]);

  useEffect(() => {
    // Find out why this component is re-rendering when play is changing.
    // Debug issue with carousel hover.
    Prismic.api(apiEndpoint).then((api) => {
      getPrimaryCarousel(api);
    });
  }, []);

  useEffect(() => {
    if (allCarouselItems.length > 0) {
      Prismic.api(apiEndpoint).then((api) => {
        getOtherCarousels(api);
      });
    }
  }, [allCarouselItems]);

  const getPrimaryCarousel = async (api) => {
    api
      .query(Prismic.Predicates.at('document.type', 'home_feature'), {
        pageSize: 100,
        orderings: '[my.show.show_title]'
      })
      .then((response) => {
        if (response) {
          setAllCarouselItems(response.results);
          setHighlightedItems(response.results);
        }
      });
  };

  const getOtherCarousels = (api) => {
    api
      .query(Prismic.Predicates.at('document.type', 'home_carousel'), {
        pageSize: 100
      })
      .then((secondQueryResponse) => {
        const parsedCarouselsData = secondQueryResponse.results.map((rawCarouselData) => {
          rawCarouselData.data.carousel_items = completeCarouselData(rawCarouselData);
          rawCarouselData.data.id = rawCarouselData.id;
          return rawCarouselData.data;
        });
        setAdditionalCarousels(parsedCarouselsData);
      });
  };

  const completeCarouselData = (rawData) => {
    return rawData.data.carousel_items.map((originalCarouselItem) => {
      const completedItemData = allCarouselItems.find((item) => {
        return item.id === originalCarouselItem.carousel_item.id;
      });
      return completedItemData;
    });
  };

  const setHighlightedItems = (results) => {
    setHighlightedCarouselItems(
      reverseChronologicalSort(
        results.filter((featuredItem) => {
          return featuredItem.data.highlighted;
        })
      )
    );
  };

  const reverseChronologicalSort = (array) => {
    return array.sort((item1, item2) => {
      const firstDate = new Date(item1.first_publication_date);
      const secondDate = new Date(item2.first_publication_date);
      return secondDate - firstDate;
    });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>EH-FM</title>
        <meta name="fragment" content="!" />
        <meta property="og:title" data-react-helmet="true" content="EH-FM" />
        <meta
          name="description"
          data-react-helmet="true"
          content="EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        />
        <meta
          property="og:description"
          data-react-helmet="true"
          content="EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        />
        <meta property="og:url" data-react-helmet="true" content="https://www.ehfm.live" />
        <meta property="og:image" data-react-helmet="true" content={PlaceholderShowImg} />
        <meta name="twitter:image" data-react-helmet="true" content={PlaceholderShowImg} />
      </Helmet>

      <Wrapper
        mixCloudWidget={props.mixCloudWidget}
        cookiesBannerShowing={props.cookies.get('ehfm') !== '1'}
      >
        {highlightedCarouselItems.length > 0 ? (
          <PrimaryCarousel data={highlightedCarouselItems} hierarchy={'primary'} autoplay={true} />
        ) : null}

        {additionalCarousels.length > 0
          ? additionalCarousels.map((carousel) => {
              const sortedData = reverseChronologicalSort(carousel.carousel_items);
              return (
                <AdditionalCarouselWrapper key={carousel.id}>
                  <AdditionalCarouselHeading>{carousel.carousel_name}</AdditionalCarouselHeading>
                  <Carousel data={sortedData} hierarchy={'secondary'} autoplay={false} />
                </AdditionalCarouselWrapper>
              );
            })
          : null}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  /* max-width: ${Sizes.maxInnerWidth}; */
  padding: 0 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 150px auto
    ${(props) => (props.cookiesBannerShowing ? '95px' : props.mixCloudWidget ? `123px` : 0)};

  @media ${Devices.tablet} {
    margin: 125px auto
      ${(props) => (props.cookiesBannerShowing ? '70px' : props.mixCloudWidget ? `123px` : 0)};
  }
`;

const AdditionalCarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  /* position: relative;
  display: block; */
`;

const AdditionalCarouselHeading = styled(Heading4)`
  color: ${Colors.notquiteBlack80Transparent};
  /* font-weight: normal; */
  margin-left: 30px;
  margin: 0px 0px 0.5rem 30px;
`;

export default HomeContainer;
