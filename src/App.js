import React, { useRef } from "react";
import { CookiesProvider } from "react-cookie";
import Main from "./containers/main/Main";
import Audio from "./components/audio/";
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";
import useScheduleData from "./hooks/useScheduleData";
import useMixcloudData from "./hooks/useMixcloudData";
import { RadioPlayerContextProvider } from "./contexts/RadioPlayerContext";
import { MixcloudWidgetContextProvider } from "./contexts/MixcloudWidgetContext";
import { DeviceInfoContextProvider } from "./contexts/DeviceInfoContext";

export const App = () => {
  const { aboutPageData, supportPageData, residentsData, carouselData } =
    usePrismicData();
  const currentShowData = useCurrentShowData();
  const { scheduleData } = useScheduleData();
  const { mixcloudFeed } = useMixcloudData();
  const audioRef = useRef(null);

  const path = window.location.pathname;

  const essentialDataFetchingFinished = () => {
    const essentialForAllPaths = residentsData;

    if (path.includes("/residents")) {
      return Boolean(essentialForAllPaths);
    }

    if (path === "/about") {
      return Boolean(essentialForAllPaths && aboutPageData);
    }

    if (path === "/support") {
      return Boolean(essentialForAllPaths && supportPageData);
    }

    if (path === "/schedule") {
      return true;
    }

    return Boolean(
      essentialForAllPaths &&
        carouselData.allCarouselItems &&
        carouselData.additionalCarousels
    );
  };

  console.log("carouselData", carouselData);
  console.log(
    "carouselData.additionalCarousels",
    carouselData.additionalCarousels
  );

  return (
    essentialDataFetchingFinished() && (
      <CookiesProvider>
        <RadioPlayerContextProvider audioRef={audioRef}>
          <MixcloudWidgetContextProvider>
            <DeviceInfoContextProvider>
              <Audio audioRef={audioRef} />
              <Main
                aboutPageData={aboutPageData}
                supportPageData={supportPageData}
                currentShowData={currentShowData}
                scheduleData={scheduleData}
                residentsData={residentsData}
                carouselData={carouselData}
                mixcloudFeed={mixcloudFeed}
              />
            </DeviceInfoContextProvider>
          </MixcloudWidgetContextProvider>
        </RadioPlayerContextProvider>
      </CookiesProvider>
    )
  );
};

export default App;
