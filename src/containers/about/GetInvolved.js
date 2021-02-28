import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Colors from "../../consts/Colors";
import { Heading4 } from "../../components/text-elements/index";
import gridStyles from "./gridStyles";

const GetInvolvedOuterWrapper = styled.div`
  ${gridStyles}
`;

const GetInvolvedItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto auto auto;
  margin-bottom: 0.75rem;
  padding: 8px;
  border-radius: 2px;
  /* border-bottom: 3px solid ${Colors.playerWhiteCustom(0.8)}; */

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

const GetInvolvedLink = styled(Heading4)`
  font-weight: normal;
  /* text-decoration: underline; */
  color: ${Colors.playerWhite};

  border-bottom: 3px solid ${Colors.playerWhiteCustom(0.8)};
`;

const GetInvolved = ({ get_involved_details }) => {
  const GetInvolvedParagraphBlocks = () => {
    return get_involved_details.map((dataItem) => {
      return (
        <GetInvolvedItemWrapper>
          <GetInvolvedText>{dataItem.get_involved_text}</GetInvolvedText>
          <GetInvolvedLink href={dataItem.get_involved_link_href.url} as="a">
            {dataItem.get_involved_link_text}
          </GetInvolvedLink>
        </GetInvolvedItemWrapper>
      );
    });
  };

  return (
    <GetInvolvedOuterWrapper>
      {GetInvolvedParagraphBlocks()}
    </GetInvolvedOuterWrapper>
  );
};

export default GetInvolved;
