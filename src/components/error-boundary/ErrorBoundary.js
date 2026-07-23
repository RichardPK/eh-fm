import React from "react";
import styled from "styled-components/macro";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Heading>Something went wrong.</Heading>
          <Body>Please try refreshing the page.</Body>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Body = styled.p`
  font-size: 1rem;
`;

export default ErrorBoundary;
