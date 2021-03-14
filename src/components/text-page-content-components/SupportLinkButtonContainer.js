import React from "react";
import styled from "styled-components/macro";
import { gridStyles } from "../../consts/gridStyles";
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

const LinkButtonContainer = ({ support_urls }) => {
  return (
    <Wrapper>
      {support_urls.map((data, i) => {
        return (
          <LinkButton
            key={i}
            href={data.support_link_href.url}
            text={data.support_text}
            linkText={data.support_link_text}
          />
        );
      })}
    </Wrapper>
  );
};

export default LinkButtonContainer;
