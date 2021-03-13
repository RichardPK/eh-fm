import React from "react";
import styled from "styled-components/macro";
import { secondColumnsStyles } from "../about/gridStyles";
import SupportLink from "./SupportLink";

const Wrapper = styled.div`
  ${secondColumnsStyles}

  a {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SupportLinkContainer = ({ support_urls }) => {
  return (
    <Wrapper>
      {support_urls.map((data) => {
        return (
          <SupportLink
            href={data.support_link_href.url}
            text={data.support_text}
            linkText={data.support_link_text}
          />
        );
      })}
    </Wrapper>
  );
};

export default SupportLinkContainer;
