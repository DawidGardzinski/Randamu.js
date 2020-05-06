import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px 0;
  margin-bottom: 15px;

  @media (min-width: 730px) {
    border-radius: 25px;
    padding: 7px 10px;
  }
`;

const StyledHeading = styled.h2`
  margin: 0;
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StyledStep = styled.p`
  display: none;
  @media (min-width: 730px) {
    display: block;
    margin: 0;
    line-height: 35px;
    color: ${({ theme }) =>
      theme.color.secondary};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) =>
      theme.fontWeight.bold};
  }
`;

const TopBar = ({ mode, path, step }) => (
  <StyledWrapper>
    <Button as={Link} to={path} back={1} />
    <StyledHeading>{mode}</StyledHeading>
    {step !== 0 && (
      <StyledStep>Step {step}</StyledStep>
    )}
  </StyledWrapper>
);

TopBar.defaultProps = {
  step: 0,
};

TopBar.propTypes = {
  mode: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  step: PropTypes.number,
};

export default TopBar;
