import React from "react";
import styled from "styled-components/macro";
import gridStyles from "../../consts/gridStyles";
import GetInvoledItem from "./GetInvolvedItem";

const GetInvolvedOuterWrapper = styled.div`
  ${gridStyles}
`;

const GetInvolved = ({ get_involved_details }) => {
  const GetInvolvedParagraphBlocks = () => {
    return get_involved_details.map((dataItem) => {
      const isEmail = dataItem.get_involved_link_href.url.includes("@");
      return <GetInvoledItem dataItem={dataItem} isEmail={isEmail} />;
    });
  };

  return (
    <GetInvolvedOuterWrapper>
      {GetInvolvedParagraphBlocks()}
    </GetInvolvedOuterWrapper>
  );
};

export default GetInvolved;
