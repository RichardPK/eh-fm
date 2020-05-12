import React from 'react';
import styled from 'styled-components/macro';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

const ResidentProfileSocial = ({ hrefs, type, imgSrcs }) => {
  return (
    <Wrapper>
      <a href={hrefs[type]} target="blank">
        <SocialImage src={imgSrcs[type]} alt="social profile" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.spanBg};
  padding: 4.5px 5px 2.5px 5px;
  background-color: transparent;

  @media ${Devices.mobileL} {
    background-color: ${Colors.spanBg};
  }
`;

const SocialImage = styled.img`
  height: 14px;
  width: 14px;
`;

export default ResidentProfileSocial;
