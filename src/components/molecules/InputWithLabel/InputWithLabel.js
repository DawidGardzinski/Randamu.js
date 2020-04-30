import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const StyledNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWithLabel = ({
  type,
  labelText,
  name,
  id,
  disabled,
}) => {
  return (
    <>
      {type === 'number' && (
        <StyledNumberWrapper>
          <Label htmlFor={id}>{labelText}</Label>
          <Input
            id={id}
            name={name}
            type={type}
          />
        </StyledNumberWrapper>
      )}

      {type === 'radio' && (
        <>
          <Input
            id={id}
            name={name}
            type={type}
          />
          <Label radio htmlFor={id}>
            {labelText}
          </Label>
        </>
      )}

      {type === 'checkbox' && (
        <>
          <Input
            id={id}
            name={name}
            type={type}
            disabled={disabled}
          />
          <Label
            checkbox
            htmlFor={id}
            disabled={disabled}
          >
            {labelText}
          </Label>
        </>
      )}
    </>
  );
};

InputWithLabel.defaultProps = {
  disabled: false,
};

InputWithLabel.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default InputWithLabel;
