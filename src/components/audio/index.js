import React from "react";

const Audio = ({ audioRef }) => (
  <audio ref={audioRef} id="audioPlayer" name="media">
    <source src="https://ehfm.out.airtime.pro/ehfm_a" type="audio/mpeg" />
  </audio>
);

export default Audio;
