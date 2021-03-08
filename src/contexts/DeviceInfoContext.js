import React, { createContext, useEffect, useState } from "react";
import Sizes from "../consts/Sizes";

export const DeviceInfoContext = createContext({
  deviceWidth: null,
  viewportWidth: null,
});

export const DeviceInfoContextProvider = ({ children }) => {
  const [deviceWidth, setDeviceWidth] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    setDeviceWidth(innerWidth);
    if (window.innerHeight > 760) {
      setViewportWidth(innerWidth - Sizes.sidePlayerWidth);
    } else {
      setViewportWidth(innerWidth - Sizes.sidePlayerWidthSmaller);
    }
  }, []);

  return (
    <DeviceInfoContext.Provider
      value={{
        deviceWidth: deviceWidth,
        viewportWidth: viewportWidth,
      }}
    >
      {children}
    </DeviceInfoContext.Provider>
  );
};
