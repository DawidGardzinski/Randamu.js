import styled, { css } from 'styled-components';

const Label = styled.label`
  cursor: pointer;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.secondary};

  ${({ radio }) =>
    radio &&
    css`
      height: 45px;
      min-width: 300px;
      text-align: center;
      padding: 0 60px;
      line-height: 45px;
      border-radius: 50px;
      background-color: ${({ theme }) =>
        theme.color.white};
      position: relative;
      ::before {
        position: absolute;
        display: inline-block;
        content: '';
        background-color: ${({ theme }) =>
          theme.color.white};
        width: 47px;
        height: 47px;
        border-radius: 50px;
        left: -1px;
        top: -1px;
        border: solid 4px
          ${({ theme }) => theme.color.primary};
      }
    `}

  ${({ checkbox }) =>
    checkbox &&
    css`
      height: 45px;
      line-height: 45px;
      padding: 0 30px;
      text-transform: uppercase;
    `}
`;

export default Label;
