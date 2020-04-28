import styled, { css } from 'styled-components';

const Input = styled.input`
  border: none;

  ${({ type }) =>
    type === 'number' &&
    css`
      height: 42px;
      padding-left: 10px;
      font-size: ${({ theme }) =>
        theme.fontSize.m};
    `}
`;

export default Input;
