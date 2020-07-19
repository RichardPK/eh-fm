import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const Image = ({ baseUrl, width, height, fit, alt }) => {
  const widthToRender = `${width ? `&w=${width}` : null}`;
  const heightToRender = `${height ? `&h=${height}` : null}`;
  const fitToRender = `${fit ? `&fit=${fit}` : null}`;

  const url = `${baseUrl}${widthToRender}${heightToRender}${fitToRender}`;

  return <img src={url} alt={alt} />;
};

export default Image;
