import React from "react";

const Audio = ({ refTarget }) => (
  <audio ref={refTarget} id="audioPlayer" name="media">
    <source src="https://ehfm.out.airtime.pro/ehfm_a" type="audio/mpeg" />
  </audio>
);
export default Audio;
