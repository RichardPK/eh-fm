import React from "react";
import Main from "./containers/main/Main";
import usePrismic from "./hooks/usePrismic";

export const App = () => {
  const { aboutPageData } = usePrismic();
  const dataFetchingFinished = Boolean(aboutPageData);

  return dataFetchingFinished && <Main aboutPageData={aboutPageData} />;
};

export default App;
