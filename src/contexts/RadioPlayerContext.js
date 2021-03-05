import React, { createContext, useState } from "react";

export const RadioPlayerContext = createContext({
  playing: false,
  volume: 1,
});

export const RadioPlayerContextProvider = ({ children, audioRef }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPauseClicked = () => {
    //    this.audioPlayer.current.play();

    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  const handleVolumeClicked = () => {
    if (volume === 0) {
      setVolume(1);
      audioRef.current.volume = 1;
    } else {
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
