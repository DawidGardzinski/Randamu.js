import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import templates from 'data/templates.json';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  @media (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TemplatesFirstStep = ({ onClick }) => (
  <StyledWrapper>
    {templates.map((el) => (
      <Button
        block
        key={el.name}
        onClick={() => onClick(el.obj)}>
        {el.name}
      </Button>
    ))}
  </StyledWrapper>
);

TemplatesFirstStep.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TemplatesFirstStep;
