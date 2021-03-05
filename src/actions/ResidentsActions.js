import { GET_RESIDENTS } from "./action-types";
import Prismic from "prismic-javascript";

const Actions = {
  getResidents: () => (dispatch) => {
    const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then((api) => {
      api
        .query(Prismic.Predicates.at("document.type", "show"), {
          pageSize: 100,
          orderings: "[my.show.show_title]",
        })
        .then((response) => {
          if (response) {
            dispatch({
              type: GET_RESIDENTS,
              payload: response.results,
            });
          }
        });
    });
  },
};

export default Actions;
