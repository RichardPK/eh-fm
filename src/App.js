import React, { useRef } from "react";
import { CookiesProvider } from "react-cookie";
import Main from "./containers/main/Main";
import Audio from "./components/audio/";
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";
import useScheduleData from "./hooks/useScheduleData";
import { RadioPlayerContextProvider } from "./contexts/RadioPlayerContext";
import { MixcloudWidgetContextProvider } from "./contexts/MixcloudWidgetContext";
import { DeviceInfoContextProvider } from "./contexts/DeviceInfoContext";

export const App = () => {
  const {
    aboutPageData,
    supportPageData,
    residentsData,
    carouselData,
  } = usePrismicData();
  const currentShowData = useCurrentShowData();
  const scheduleData = useScheduleData();
  const audioRef = useRef(null);

  const essentialDataFetchingFinished = Boolean(
    currentShowData &&
      scheduleData &&
      residentsData &&
      carouselData.allCarouselItems &&
      carouselData.additionalCarousels
  );

  return (
    essentialDataFetchingFinished && (
      <CookiesProvider>
        <RadioPlayerContextProvider audioRef={audioRef}>
          <MixcloudWidgetContextProvider>
            <DeviceInfoContextProvider>
              <Audio refProp={audioRef} />
              <Main
                aboutPageData={aboutPageData}
                supportPageData={supportPageData}
                currentShowData={currentShowData}
                scheduleData={scheduleData}
                residentsData={residentsData}
                carouselData={carouselData}
              />
            </DeviceInfoContextProvider>
          </MixcloudWidgetContextProvider>
        </RadioPlayerContextProvider>
      </CookiesProvider>
    )
  );
};

export default App;
