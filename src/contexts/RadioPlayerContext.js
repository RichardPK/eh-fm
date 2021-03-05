import React, { createContext, useState } from "react";

export const RadioPlayerContext = createContext({
  playing: false,
  volume: 1,
});

export const RadioPlayerContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPauseClicked = () => {
    setPlaying(!playing);
  };

  const handleVolumeClicked = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  return (
    <RadioPlayerContext.Provider
      value={{
        playing: playing,
        handlePlayPauseClicked: handlePlayPauseClicked,
        volume: volume,
        handleVolumeClicked: handleVolumeClicked,
      }}
    >
      {children}
    </RadioPlayerContext.Provider>
  );
};
