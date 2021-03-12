import React, { useState } from "react";
import styled from "styled-components/macro";
import GetImageUrl from "../../helpers/GetImageUrl";
import Anims from "../../consts/Anims";

const Image = ({ baseUrl, width, height, fit, alt, noFadeIn, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const url = GetImageUrl({ baseUrl, width, height, fit });
  return (
    <Img
      {...props}
      src={url}
      alt={alt}
      onLoad={() => setLoaded(true)}
      loaded={loaded}
      noFadeIn={noFadeIn}
    />
  );
};

const Img = styled.img`
  opacity: ${(props) => (props.noFadeIn ? 1 : 0)};
  ${(props) =>
    !props.noFadeIn && props.loaded ? `${Anims.fadeInWithDelay(0)}` : ``}
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default Image;
