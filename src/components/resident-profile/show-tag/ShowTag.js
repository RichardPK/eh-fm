import React from 'react';
import styled from 'styled-components/macro';
import { Tiny } from '../../text-elements/index';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

export default ({ name, url, index }) => {
  return (
    <Wrapper index={index} key={url}>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2px;
  padding: 4px;
  background-color: ${Colors.softWhite};
  border-radius: 1px;
  display: ${(props) => (props.index > 1 ? 'none' : 'flex')};

  @media ${Devices.mobileL} {
    display: flex;
  }
`;

const Name = styled(Tiny)``;
