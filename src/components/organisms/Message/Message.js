import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import Curtain from 'components/atoms/Curtain/Curtain';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    theme.color.white};
  height: 500px;
  width: 340px;
  border: solid 5px
    ${({ theme }) => theme.color.secondary};
  padding: 20px;
  color: ${({ theme }) => theme.color.secondary};
  z-index: 9;
`;

const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.color.secondary};
  width: 225px;
  color: ${({ theme }) => theme.color.white};
  padding: 5px 70px;
  height: 35px;
  margin: 7px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 280px;
  overflow: auto;
`;

const Message = ({ children }) => (
  <>
    <StyledWrapper>
      <div>
        <StyledHeading>
          Your object will contain:
        </StyledHeading>
        <StyledList>{children}</StyledList>
      </div>
      <StyledButton>OK</StyledButton>
    </StyledWrapper>
    <Curtain />
  </>
);

Message.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Message;
