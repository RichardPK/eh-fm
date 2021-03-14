import React from "react";
import styled from "styled-components/macro";
import gridStyles from "../../consts/gridStyles";
import LinkButton from "./LinkButton";

const Wrapper = styled.div`
  ${gridStyles}

  a {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const GetInvolved = ({ get_involved_details }) => {
  return (
    <Wrapper>
      {get_involved_details.map((data, i) => {
        return (
          <LinkButton
            key={i}
            href={data.get_involved_link_href.url}
            text={data.get_involved_text}
            linkText={data.get_involved_link_text}
          />
        );
      })}
    </Wrapper>
  );
};

export default GetInvolved;
