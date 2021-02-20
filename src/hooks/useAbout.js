import { useState, useEffect } from "react";
import Prismic from "prismic-javascript";

export const useAbout = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    Prismic.api(process.env.REACT_APP_PRISMIC_API_URL).then((api) => {
      api
        .query(Prismic.Predicates.at("document.type", "about"), {
          pageSize: 1,
        })
        .then((response) => {
          response && setAboutData(response.results[0]);
        });
    });
  }, []);

  return aboutData;
};

export default useAbout;
