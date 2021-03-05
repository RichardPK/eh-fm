import React, { useRef, use } from "react";
import Main from "./containers/main/Main";
import Audio from "./components/audio/";
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";
import useScheduleData from "./hooks/useScheduleData";
import { RadioPlayerContextProvider } from "./contexts/RadioPlayerContext";

export const App = () => {
  const { aboutPageData, supportPageData } = usePrismicData();
  const currentShowData = useCurrentShowData();
  const scheduleData = useScheduleData();
  // const audioRef = useRef(null);

  const essentialDataFetchingFinished = Boolean(
    currentShowData && scheduleData
  );

  return (
    essentialDataFetchingFinished && (
      <RadioPlayerContextProvider>
        {/* <Audio refTarget={audioRef} /> */}
        <Main
          aboutPageData={aboutPageData}
          supportPageData={supportPageData}
          currentShowData={currentShowData}
          scheduleData={scheduleData}
        />
      </RadioPlayerContextProvider>
    )
  );
};

export default App;
