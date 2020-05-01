import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px 0;
`;

const StyledHeading = styled.h2`
  margin: 0;
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const TopBar = ({ mode }) => (
  <StyledWrapper>
    <Button back />
    <StyledHeading>{mode}</StyledHeading>
  </StyledWrapper>
);

TopBar.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default TopBar;
