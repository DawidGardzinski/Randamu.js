import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const animate = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-3000px);
  }
`;

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
  ${({ hide }) =>
    hide &&
    css`
      animation: ${animate} 2s ease;
      animation-fill-mode: forwards;
    `}
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

const StartScreen = ({isHidden, onClick}) => (
  <StyledWrapper id="startscreen" hide={isHidden}>
    <StyledHeader>
      <StyledHeading>Randamu.js</StyledHeading>
      <StyledParagraph>
        Example data for your projects
      </StyledParagraph>
    </StyledHeader>
    <StyledButton onClick={onClick} start={1} />
  </StyledWrapper>
);


StartScreen.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default StartScreen;
