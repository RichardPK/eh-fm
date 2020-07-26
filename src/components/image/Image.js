import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const Image = ({ baseUrl, width, height, fit, alt }) => {
  const widthToRender = `${width ? `&w=${width}` : ''}`;
  const heightToRender = `${height ? `&h=${height}` : ''}`;
  const fitToRender = `${fit ? `&fit=${fit}` : ''}`;

  const url = `${baseUrl}${widthToRender}${heightToRender}${fitToRender}`;
  return <img src={url} alt={alt} />;
};

export default Image;
