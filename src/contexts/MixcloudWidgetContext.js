import React, { createContext, useState } from "react";

export const MixcloudWidgetContext = createContext({
  mixcloudWidget: null,
});

export const MixcloudWidgetContextProvider = ({ children }) => {
  const [mixcloudWidgetHtml, setMixcloudWidgetHtml] = useState(null);

  const handleMixCloudClick = (showPath) => {
    let url = `https://api.mixcloud.com${showPath}embed-json/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMixcloudWidgetHtml(data.html);
      });
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
