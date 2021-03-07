import React from "react";
import styled from "styled-components/macro";
import GetImageUrl from "../../helpers/GetImageUrl";

const Image = ({ baseUrl, width, height, fit, alt, ...props }) => {
  const url = GetImageUrl({ baseUrl, width, height, fit });
  return <Img {...props} src={url} alt={alt} />;
};

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default Image;
