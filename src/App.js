import React from "react";
import Main from "./containers/main/Main";
import usePrismic from "./hooks/usePrismic";

export const App = () => {
  const { aboutPageData, supportPageData } = usePrismic();
  const dataFetchingFinished = Boolean(aboutPageData && supportPageData);

  return (
    dataFetchingFinished && (
      <Main aboutPageData={aboutPageData} supportPageData={supportPageData} />
    )
  );
};

export default App;
