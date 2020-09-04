import React, { useEffect, useState } from "react";
import CurrentShow from "../../components/current-show/CurrentShow";
import Schedule from "../../components/schedule/Schedule";
import { Helmet } from "react-helmet";
import Prismic from "prismic-javascript";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import { Heading4, Body } from "../../components/text-elements/index";
import PlaceholderShowImg from "../../assets/images/placeholder-showimg.jpg";
import Carousel from "../../components/carousel/Carousel";
import AdditionalCarouselHeading from "../../components/additional-carousel-heading/AdditionalCarouselHeading";

const HomeContainer = (props) => {
  const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";
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
      .query(Prismic.Predicates.at("document.type", "home_feature"), {
        pageSize: 100,
        orderings: "[my.show.show_title]",
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
      .query(Prismic.Predicates.at("document.type", "home_carousel"), {
        pageSize: 100,
      })
      .then((secondQueryResponse) => {
        const parsedCarouselsData = secondQueryResponse.results.map(
          (rawCarouselData) => {
            rawCarouselData.data.carousel_items = completeCarouselData(
              rawCarouselData
            );
            rawCarouselData.data.id = rawCarouselData.id;
            return rawCarouselData.data;
          }
        );
        const carouselsByPosition = sortCarouselsByPosition(
          parsedCarouselsData
        );
        setAdditionalCarousels(carouselsByPosition);
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

  const sortCarouselsByPosition = (array) => {
    return array.sort((item1, item2) => {
      return item1.position - item2.position;
    });
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
        <meta
          property="og:url"
          data-react-helmet="true"
          content="https://www.ehfm.live"
        />
        <meta
          property="og:image"
          data-react-helmet="true"
          content={PlaceholderShowImg}
        />
        <meta
          name="twitter:image"
          data-react-helmet="true"
          content={PlaceholderShowImg}
        />
      </Helmet>

      <Wrapper
        mixCloudWidget={props.mixCloudWidget}
        cookiesBannerShowing={props.cookies.get("ehfm") !== "1"}
      >
        {highlightedCarouselItems.length > 0 ? (
          <>
            <PrimaryCarousel
              data={highlightedCarouselItems}
              hierarchy={"primary"}
              autoplay={true}
              handleMixCloudClick={props.handleMixCloudClick}
            />
          </>
        ) : null}

        {additionalCarousels.length > 0
          ? additionalCarousels.map((carousel) => {
              const sortedData = reverseChronologicalSort(
                carousel.carousel_items
              );
              return (
                <AdditionalCarouselWrapper key={carousel.id}>
                  <AdditionalCarouselHeading
                    carouselName={carousel.carousel_name}
                  />
                  <Carousel
                    data={sortedData}
                    hierarchy={"secondary"}
                    autoplay={false}
                    handleMixCloudClick={props.handleMixCloudClick}
                  />
                </AdditionalCarouselWrapper>
              );
            })
          : null}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: calc(100vw - 2rem);
  margin: 2rem 0
    ${(props) =>
      props.cookiesBannerShowing ? "70px" : props.mixCloudWidget ? `123px` : 0};

  @media ${Devices.mobileL} {
    padding: 0 2rem;
    max-width: calc(100vw - 4rem);
  }

  @media ${Devices.tablet} {
    padding: 0 3rem;
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);

    margin: 2.5rem 0
      ${(props) =>
        props.cookiesBannerShowing
          ? "95px"
          : props.mixCloudWidget
          ? `123px`
          : 0};
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    max-width: calc(100vw - ${Sizes.sidePlayerWidth}px - 6rem);
  }
`;

const AdditionalCarouselWrapper = styled.div`
  margin-bottom: 2.75rem;
`;

export default HomeContainer;
