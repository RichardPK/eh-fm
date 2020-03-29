import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../consts/Colors';
import { ReactSVG } from 'react-svg';
import PayPalIcon from '../../assets/svgs/paypal.svg';
import { Body } from '../text-elements/index';

const PaypalButton = ({}) => {
  return (
    <Wrapper>
      <Link
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FNHL37CAF2JDJ&source=url"
        target="_blank"
      >
        <InnerWrapper>
          <IconWrapper>
            <ReactSVG src={PayPalIcon} />
          </IconWrapper>
          <DonateText>Donate</DonateText>
        </InnerWrapper>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Link = styled.a``;

const InnerWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: ${Colors.ehfmPrimary};
`;

const DonateText = styled(Body)`
  margin-left: 0.5rem;
  color: ${Colors.playerWhite};
`;

const IconWrapper = styled.div`
  div {
    display: flex;

    svg {
      height: 20px;
      width: 20px;

      #path3355-4 {
        fill: ${Colors.playerWhite} !important;
      }

      #path3351-2 {
        fill: ${Colors.softGrey} !important;
        /* fill: ${Colors.red} !important; */
      }
      #path3353-3 {
        fill: ${Colors.altBlue80Transparent} !important;
      }
    }
  }
`;

export default PaypalButton;
