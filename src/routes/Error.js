import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const ErrorPageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;

const ErrorPageText = styled.p`
  margin-bottom: 1em; 
`;

function ErrorPage() {
  return (
    <div className="errorpage">
      <ErrorPageContainer>
        <ErrorPageTitle>Oh não!</ErrorPageTitle>
        <ErrorPageText>Não achamos o que você estava procurando.</ErrorPageText>
      </ErrorPageContainer> 
    </div>
  );
}

export default ErrorPage;