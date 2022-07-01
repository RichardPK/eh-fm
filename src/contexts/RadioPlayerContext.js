import React, { createContext, useState } from "react";
import {
  clickedPlay,
  clickedStop,
  clickedMute,
  clickedUnmute,
} from "../components/analytics/ClickEventAnalytics";

export const RadioPlayerContext = createContext({
  playing: false,
  volume: 1,
});

export const RadioPlayerContextProvider = ({ children, audioRef }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPauseClicked = () => {
    if (playing) {
      clickedStop();
      setPlaying(false);
      audioRef.current.pause();
    } else {
      clickedPlay();
      setPlaying(true);
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const handleVolumeClicked = () => {
    if (volume === 0) {
      clickedUnmute();
      setVolume(1);
      audioRef.current.volume = 1;
    } else {
      clickedMute();
      setVolume(0);
      audioRef.current.volume = 0;
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
