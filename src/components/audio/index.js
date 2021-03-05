import React from "react";

const Audio = ({ refProp }) => (
  <audio ref={refProp} id="audioPlayer" name="media">
    <source src="https://ehfm.out.airtime.pro/ehfm_a" type="audio/mpeg" />
  </audio>
);
export default Audio;
