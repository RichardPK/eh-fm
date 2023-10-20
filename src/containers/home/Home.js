import React, { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components/macro";
import MetaData from "../../components/metadata/MetaData";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Carousel from "../../components/carousel/Carousel";
import { WidgetMarginStyles, PagePaddingStyles } from "../../consts/Styles";
import AdditionalCarouselHeading from "../../components/additional-carousel-heading/AdditionalCarouselHeading";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";

const filterIncompleteItems = (items) =>
  items
    ? items.filter(
        ({ data }) =>
          data.headline &&
          data.link &&
          data.type &&
          data.category &&
          data.headline &&
          data.image &&
          data.image.url
      )
    : [];

const mixcloudFeedToCarousel = (feed) =>
  feed.map(({ cloudcasts }) => {
    const { name, pictures, key } = cloudcasts[0];

    return {
      data: {
        headline: name,
        link: {
          link_type: "Web",
          url: key,
        },
        type: "past show",
        category: "",
        image: {
          dimensions: { width: 640, height: 640 },
          url: pictures["640wx640h"],
        },
      },
    };
  });

const HomeContainer = ({ carouselData, mixcloudFeed }) => {
  console.log(
    "mixcloudFeedToCarousel(mixcloudFeed)",
    mixcloudFeedToCarousel(mixcloudFeed)
  );
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml, handleMixcloudClick } = useContext(
    MixcloudWidgetContext
  );
  const [highlightedCarouselItems, setHighlightedCarouselItems] = useState([]);
  const [additionalCarouselsWithItems, setAdditionalCarouselsWithItems] =
    useState([]);

  const PrimaryCarousel = Carousel;
  const { allCarouselItems, additionalCarousels } = carouselData;

  const reverseChronologicalSort = (array) => {
    return array.sort((item1, item2) => {
      const firstDate = new Date(item1.first_publication_date);
      const secondDate = new Date(item2.first_publication_date);
      return secondDate - firstDate;
    });
  };

  // Get 'highlighted' carousel items
  useEffect(() => {
    const filteredHighlightedCarouselItems = filterIncompleteItems(
      allCarouselItems
    ).filter((featuredItem) => featuredItem.data.highlighted);
    const sortedByMostRecent = reverseChronologicalSort(
      filteredHighlightedCarouselItems
    );

    setHighlightedCarouselItems(sortedByMostRecent);
  }, [allCarouselItems]);

  // Get 'additional' carousels
  useEffect(() => {
    const sortCarouselsByPosition = (array) => {
      return array.sort((item1, item2) => {
        return item1.position - item2.position;
      });
    };

    const getCarouselItems = (carouselData) => {
      const carouselItemsWithoutLinkedData = carouselData.data.carousel_items;
      const carouselItemsWithLinkedData = carouselItemsWithoutLinkedData.map(
        (carouselItem) => {
          return allCarouselItems.find((item) => {
            const idToCompare = carouselItem.carousel_item
              ? carouselItem.carousel_item.id
              : carouselItem.id;
            return item.id === idToCompare;
          });
        }
      );
      return carouselItemsWithLinkedData;
    };

    const getCarousels = () =>
      additionalCarousels
        ? additionalCarousels.map((carouselData) => {
            const carouselItems = getCarouselItems(carouselData);
            carouselData.data.carousel_items =
              filterIncompleteItems(carouselItems);
            carouselData.data.id = carouselData.id;
            return carouselData.data;
          })
        : [];

    const carouselsWithParsedData = getCarousels();
    const carouselsSortedByPosition = sortCarouselsByPosition(
      carouselsWithParsedData
    );
    setAdditionalCarouselsWithItems(carouselsSortedByPosition);
  }, [additionalCarousels, allCarouselItems]);

  return (
    <React.Fragment>
      <MetaData url="https://www.ehfm.live" />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        {highlightedCarouselItems.length > 0 && (
          <PrimaryCarousel
            data={highlightedCarouselItems}
            hierarchy={"primary"}
            handleMixcloudClick={handleMixcloudClick}
          />
        )}

        {additionalCarouselsWithItems.length > 0
          ? additionalCarouselsWithItems.map((carousel) => {
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
                    handleMixcloudClick={handleMixcloudClick}
                  />
                </AdditionalCarouselWrapper>
              );
            })
          : null}
        {mixcloudFeed.length > 0 ? (
          <AdditionalCarouselWrapper key={"mixcloud-feed-carousel"}>
            <AdditionalCarouselHeading carouselName={"Latest shows"} />
            <Carousel
              data={mixcloudFeedToCarousel(mixcloudFeed)}
              hierarchy={"secondary"}
              handleMixcloudClick={handleMixcloudClick}
            />
          </AdditionalCarouselWrapper>
        ) : null}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 2rem);
  ${(props) => WidgetMarginStyles(props)};
  ${PagePaddingStyles}

  @media ${Devices.mobileL} {
    max-width: calc(100vw - 4rem);
  }

  @media ${Devices.tablet} {
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    max-width: calc(100vw - ${Sizes.sidePlayerWidth}px - 6rem);
  }
`;

const AdditionalCarouselWrapper = styled.div`
  margin-bottom: 2.75rem;
`;

export default HomeContainer;
