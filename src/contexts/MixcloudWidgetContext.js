import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";

export const MixcloudWidgetContext = createContext({
  mixcloudWidget: null,
});

export const MixcloudWidgetContextProvider = ({ children }) => {
  const [mixcloudWidgetHtml, setMixcloudWidgetHtml] = useState(null);
  const [cookies, setCookie] = useCookies(["ehfm"]);

  const handleMixCloudClick = (showPath) => {
    let url = `https://api.mixcloud.com${showPath}embed-json/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMixcloudWidgetHtml(data.html);
      });

    if (!cookies["ehfm"]) {
      setCookie("ehfm", 1, { path: "/" });
    }
  };

  return (
    <MixcloudWidgetContext.Provider
      value={{
        mixcloudWidgetHtml: mixcloudWidgetHtml,
        setMixcloudWidgetHtml: setMixcloudWidgetHtml,
        handleMixCloudClick: handleMixCloudClick,
      }}
    >
      {children}
    </MixcloudWidgetContext.Provider>
  );
};
