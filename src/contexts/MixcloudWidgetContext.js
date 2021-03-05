import React, { createContext, useState } from "react";

export const MixcloudWidgetContext = createContext({
  mixcloudWidget: null,
});

export const MixcloudWidgetContextProvider = ({ children }) => {
  const [mixcloudWidget, setMixcloudWidget] = useState(null);

  const handleMixCloudClick = (showPath) => {
    let url = `https://api.mixcloud.com${showPath}embed-json/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        debugger;
        setMixcloudWidget(data.html);
      });
  };

  return (
    <MixcloudWidgetContext.Provider
      value={{
        mixcloudWidget: mixcloudWidget,
        handleMixCloudClick: handleMixCloudClick,
      }}
    >
      {children}
    </MixcloudWidgetContext.Provider>
  );
};
