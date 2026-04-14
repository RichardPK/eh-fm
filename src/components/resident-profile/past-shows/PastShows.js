import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import PastShowCard from "../past-show-card/PastShowCard";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import { PagePaddingStyles } from "../../../consts/Styles";

const PAGE_SIZE = 50;

const PastShows = ({
  displayShows,
  allPastShows,
  renderDate,
  renderShowName,
  handleMixcloudClick,
  mixcloudWidgetHtml,
  cookiesBannerShowing,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [allPastShows]);

  if (!displayShows) return null;

  // Skip the first item (most recent, already shown above as the headline button)
  const showsPool = allPastShows.slice(1);
  const totalPages = Math.ceil(showsPool.length / PAGE_SIZE);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const visibleShows = showsPool.slice(pageStart, pageStart + PAGE_SIZE);

  const getPageNumbers = () => {
    const windowStart = Math.max(1, currentPage - 1);
    const windowEnd = Math.min(totalPages, currentPage + 1);
    const pages = [];
    for (let i = windowStart; i <= windowEnd; i++) pages.push(i);
    // Append ellipsis + last page if not already included
    if (windowEnd < totalPages - 1) {
      pages.push("...");
      pages.push(totalPages);
    } else if (windowEnd < totalPages) {
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <PastShowsWrapper
      mixcloudWidgetHtml={mixcloudWidgetHtml}
      cookiesBannerShowing={cookiesBannerShowing}
    >
      {visibleShows.map((show, i) => (
        <PastShowCard
          key={i}
          handleMixcloudClick={() => handleMixcloudClick(show.key)}
          date={renderDate(show.name)}
          showName={renderShowName(show.name)}
          tags={show.tags}
        />
      ))}
      {totalPages > 1 && (
        <PaginationWrapper>
          <PageButton
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ‹
          </PageButton>
          {getPageNumbers().map((page, i) =>
            page === "..." ? (
              <Ellipsis key={`ellipsis-${i}`}>…</Ellipsis>
            ) : (
              <PageButton
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PageButton>
            )
          )}
          <PageButton
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            ›
          </PageButton>
        </PaginationWrapper>
      )}
    </PastShowsWrapper>
  );
};

const PastShowsWrapper = styled.div`
  ${PagePaddingStyles}
  left: 0;
  position: absolute;
  top: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;

  @media ${Devices.tablet} {
    top: calc(100vh - 7rem);
  }

  :last-child {
    ${(props) => (props.mixcloudWidgetHtml ? `padding-bottom: 123px` : "")};
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${Colors.ehfmPrimary(0.2)};
  border-top-color: ${Colors.ehfmPrimary()};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: ${Colors.ehfmPrimary()};
  font-size: 0.9rem;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  padding: 1.5rem 0;
`;

const PageButton = styled.button`
  min-width: 36px;
  padding: 0.4rem 0.6rem;
  background-color: ${(props) =>
    props.active ? Colors.ehfmPrimary() : "transparent"};
  color: ${(props) =>
    props.active ? "white" : Colors.ehfmPrimary()};
  border: 2px solid ${Colors.ehfmPrimary()};
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.35 : 1)};
  font-size: 0.9rem;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.active ? Colors.ehfmPrimary(0.85) : Colors.ehfmPrimary(0.1)};
  }
`;

const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  color: ${Colors.ehfmPrimary()};
  font-size: 0.9rem;
`;

export default PastShows;
