import React, { useRef } from "react";
import Main from "./containers/main/Main";
import Audio from "./components/audio/";
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";
import useScheduleData from "./hooks/useScheduleData";
import { RadioPlayerContext } from "./contexts/RadioPlayerContext";

export const App = () => {
  const { aboutPageData, supportPageData } = usePrismicData();
  const currentShowData = useCurrentShowData();
  const scheduleData = useScheduleData();
  const audioRef = useRef(null);

  const essentialDataFetchingFinished = Boolean(
    currentShowData && scheduleData
  );

  return (
    essentialDataFetchingFinished && (
      <RadioPlayerContext.Provider value={"hello from context"}>
        {/* <Audio refTarget={audioRef} /> */}
        <Main
          aboutPageData={aboutPageData}
          supportPageData={supportPageData}
          currentShowData={currentShowData}
          scheduleData={scheduleData}
        />
      </RadioPlayerContext.Provider>
    )
  );
};

export default App;
