import { useState, useEffect } from "react";
import Prismic from "@prismicio/client";

export const usePrismic = () => {
  const [aboutPageData, setAboutData] = useState(null);
  const [supportPageData, setSupportData] = useState(null);
  const [residentsData, setResidentsData] = useState(null);
  const [allCarouselItems, setAllCarouselItems] = useState(null);
  const [additionalCarousels, setAdditionalCarousels] = useState(null);

  useEffect(() => {
    const Client = Prismic.client(process.env.REACT_APP_PRISMIC_API_URL);

    const fetchData = async () => {
      Client.query(Prismic.Predicates.at("document.type", "about"), {
        pageSize: 1,
      }).then((response) => {
        response && setAboutData(response.results[0]);
      });

      Client.query(Prismic.Predicates.at("document.type", "support"), {
        pageSize: 1,
      }).then((response) => {
        response && setSupportData(response.results[0]);
      });

      Client.query(Prismic.Predicates.at("document.type", "show"), {
        pageSize: 200,
        orderings: "[my.show.show_title]",
      }).then((response) => {
        response && setResidentsData(response.results);
      });

      Client.query(Prismic.Predicates.at("document.type", "home_feature"), {
        pageSize: 100,
        orderings: "[my.show.show_title]",
      }).then((response) => {
        response && setAllCarouselItems(response.results);
      });

      Client.query(Prismic.Predicates.at("document.type", "home_carousel"), {
        pageSize: 100,
      }).then((response) => {
        response && setAdditionalCarousels(response.results);
      });
    };

    fetchData();
  }, []);

  const carouselData = { allCarouselItems, additionalCarousels };

  return { aboutPageData, supportPageData, residentsData, carouselData };
};

export default usePrismic;
