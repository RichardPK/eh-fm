import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../consts/Colors';
import { ReactSVG } from 'react-svg';
import PayPalIcon from '../../assets/svgs/paypal.svg';
import { Cta } from '../text-elements/index';
import Devices from '../../consts/Devices';

const PaypalButton = ({}) => {
  let [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <Link
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FNHL37CAF2JDJ&source=url"
        target="_blank"
      >
        <InnerWrapper hovered={hovered}>
          <IconWrapper hovered={hovered}>
            <ReactSVG src={PayPalIcon} />
          </IconWrapper>
          <DonateText hovered={hovered}>Donate</DonateText>
        </InnerWrapper>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-right: 0rem;

  @media ${Devices.mobileL} {
    /* margin-right: 0.75rem; */
  }

  @media ${Devices.tablet} {
    margin-right: 1rem;
  }
`;

const Link = styled.a``;

const InnerWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: ${(props) => (props.hovered ? Colors.ehfmPrimary10 : Colors.ehfmPrimary)};
  transition: background-color, 0.2s ease-out;
`;

const DonateText = styled(Cta)`
  font-weight: normal;
  margin-left: 0.5rem;
  margin-right: 0.25rem;
  color: ${(props) => (props.hovered ? Colors.ehfmPrimary : Colors.playerWhite)};
  transition: color, 0.2s ease-out;
`;

const IconWrapper = styled.div`
  div {
    display: flex;

    svg {
      height: 20px;
      width: 20px;

      #path3355-4 {
        fill: ${(props) => (props.hovered ? Colors.ehfmPrimary : Colors.playerWhite)} !important;
        transition: fill, 0.2s ease-out;
      }

      #path3351-2 {
        fill: ${(props) => (props.hovered ? Colors.altBlue : Colors.softWhite)} !important;
        transition: fill, 0.2s ease-out;
      }
      #path3353-3 {
        fill: ${Colors.altBlue80Transparent} !important;
      }
    }
  }
`;

export default PaypalButton;
