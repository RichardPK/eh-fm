import React, { useRef, useState } from "react";
import styled from "styled-components/macro";

const Image = ({ baseUrl, width, height, fit, alt, ...props }) => {
  const widthToRender = `${width ? `&w=${width}` : ""}`;
  const heightToRender = `${height ? `&h=${height}` : ""}`;
  const fitToRender = `${fit ? `&fit=${fit}` : ""}`;

  const url = `${baseUrl}${widthToRender}${heightToRender}${fitToRender}`;
  return <Img {...props} src={url} alt={alt} />;
};

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default Image;
