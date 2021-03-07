import React, { useRef } from "react";
import { CookiesProvider } from "react-cookie";
import Main from "./containers/main/Main";
import Audio from "./components/audio/";
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";
import useScheduleData from "./hooks/useScheduleData";
import { RadioPlayerContextProvider } from "./contexts/RadioPlayerContext";
import { MixcloudWidgetContextProvider } from "./contexts/MixcloudWidgetContext";

export const App = () => {
  const { aboutPageData, supportPageData, residentsData } = usePrismicData();
  const currentShowData = useCurrentShowData();
  const scheduleData = useScheduleData();
  const audioRef = useRef(null);

  const essentialDataFetchingFinished = Boolean(
    currentShowData && scheduleData && residentsData
  );

  return (
    essentialDataFetchingFinished && (
      <CookiesProvider>
        <RadioPlayerContextProvider audioRef={audioRef}>
          <MixcloudWidgetContextProvider>
            <Audio refProp={audioRef} />
            <Main
              aboutPageData={aboutPageData}
              supportPageData={supportPageData}
              currentShowData={currentShowData}
              scheduleData={scheduleData}
              residentsData={residentsData}
            />
          </MixcloudWidgetContextProvider>
        </RadioPlayerContextProvider>
      </CookiesProvider>
    )
  );
};

export default App;
