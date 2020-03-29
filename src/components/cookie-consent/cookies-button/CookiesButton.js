import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Body } from '../../text-elements/index';
import Colors from '../../../consts/Colors';

const CookiesButton = ({ negative, positive, onClick, children }) => {
  return (
    <Wrapper onClick={onClick}>
      <CookiesButtonText>{children}</CookiesButtonText>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CookiesButtonText = styled(Body)`
  color: ${Colors.ehfmPrimary};
`;

export default CookiesButton;
