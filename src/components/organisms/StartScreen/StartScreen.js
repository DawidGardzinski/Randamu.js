import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
`;

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.color.primary};
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  margin-top: 80px;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) =>
    theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
`;

const StyledButton = styled(Button)`
  margin-bottom: 70px;
`;

const StartScreen = () => (
  <StyledWrapper>
    <StyledHeader>
      <StyledHeading>Randamu.js</StyledHeading>
      <StyledParagraph>
        Example data for your projects
      </StyledParagraph>
    </StyledHeader>
    <StyledButton start />
  </StyledWrapper>
);

export default StartScreen;
