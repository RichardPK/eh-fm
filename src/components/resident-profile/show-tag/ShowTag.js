import React from 'react';
import styled from 'styled-components';
import { Tiny } from '../../text-elements/index';
import Colors from '../../../consts/Colors';

export default ({ name, url }) => {
  return (
    <Wrapper key={url}>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2px;
  padding: 4px;
  background-color: ${Colors.softWhite};
  border-radius: 1px;
`;

const Name = styled(Tiny)``;
