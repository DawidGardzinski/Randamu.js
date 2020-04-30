import styled, { css } from 'styled-components';
import checkMarkIcon from 'assets/checkMark.svg';

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

  ${({ type }) =>
    type === 'checkbox' &&
    css`
      cursor: pointer;
      margin: 0;
      ::before {
        content: '';
        display: block;
        width: 45px;
        height: 45px;
        background-color: ${({ theme }) =>
          theme.color.white};
        border-radius: 15px;
        transform: translate(-40%, -40%);
      }
      :checked:before {
        background-color: ${({ theme }) =>
          theme.color.green};
        background-image: url(${checkMarkIcon});
        background-repeat: no-repeat;
        background-position: 50%;
      }
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      ::before {
        background-color: ${({ theme }) =>
          theme.color.gray};
        background-image: url(${checkMarkIcon});
        background-repeat: no-repeat;
        background-position: 50%;
      }
    `}

  ${({ type }) =>
    type === 'radio' &&
    css`
      margin: 0;
      cursor: pointer;
      ::before {
        content: '';
        display: block;
        width: 45px;
        height: 45px;
        background-color: ${({ theme }) =>
          theme.color.white};
        border-radius: 50px;
        transform: translate(-40%, -40%);
      }
      :checked:before {
        background-color: ${({ theme }) =>
          theme.color.green};
      }
    `}


`;

export default Input;
