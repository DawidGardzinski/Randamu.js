import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  max-width: 730px;

  @media (min-width: 730px) {
    width: 730px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const GridTemplate = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridTemplate;
