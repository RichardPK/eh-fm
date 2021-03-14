import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Colors from "../../consts/Colors";
import { Cta, Heading4 } from "../../components/text-elements/index";
import { ReactComponent as ExternalLink } from "../../assets/svgs/external-link.svg";

const GetInvolvedItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto auto auto;
  margin-bottom: 0.75rem;
  padding: 8px;
  border-radius: 2px;

  background-color: ${Colors.ehfmPrimary()};

  grid-template-columns: 1.5fr auto;

  @media ${Devices.mobileL} {
    grid-template-columns: 1fr auto;
  }
`;

const GetInvolvedText = styled(Heading4)`
  margin-right: 0.5rem;
  font-weight: normal;
  color: ${Colors.playerWhite};
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 0.5rem;
    margin-bottom: 0.6rem;
    width: 12px;
    height: 12px;
    g {
      fill: ${(props) =>
        props.isEmail ? Colors.ehfmPrimary() : Colors.playerWhite};
    }
  }
`;

const GetInvolvedLinkText = styled(Cta)`
  font-weight: normal;
  color: ${Colors.playerWhite};

  border-bottom: 3px solid ${Colors.playerWhiteCustom(0.8)};
`;

const GetInvolvedItem = ({ dataItem, isEmail }) => {
  return (
    <GetInvolvedItemWrapper>
      <GetInvolvedText>{dataItem.get_involved_text}</GetInvolvedText>
      <LinkWrapper
        isEmail={isEmail}
        href={dataItem.get_involved_link_href.url}
        as="a"
      >
        <GetInvolvedLinkText>
          {dataItem.get_involved_link_text}
        </GetInvolvedLinkText>
        <ExternalLink />
      </LinkWrapper>
    </GetInvolvedItemWrapper>
  );
};

export default GetInvolvedItem;
