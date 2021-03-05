import { useState, useEffect } from "react";
import Prismic from "@prismicio/client";

export const usePrismic = () => {
  const [aboutPageData, setAboutData] = useState(null);
  const [supportPageData, setSupportData] = useState(null);

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
    };
    fetchData();
  }, []);

  return { aboutPageData, supportPageData };
};

export default usePrismic;
