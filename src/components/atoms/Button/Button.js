import styled, { css } from 'styled-components';
import arrowIcon from 'assets/arrow.svg';
import whiteArrowIcon from 'assets/whiteArrow.svg';
import backArrowIcon from 'assets/backArrow.svg';


const Button = styled.button`
  border: none;
  height: 55px;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
  padding: 5px 50px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 50px;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.color.white};

  ${({ next }) =>
    next &&
    css`
      padding: 5px 70px;
      background-image: url(${arrowIcon});
      background-repeat: no-repeat;
      background-position: 90% 50%;
      text-transform: uppercase;
      line-height: 45px;
    `}

  ${({ start }) =>
    start &&
    css`
      width: 70px;
      height: 70px;
      background-image: url(${whiteArrowIcon});
      background-size: 31px;
      background-repeat: no-repeat;
      background-position: 50% 60%;
      padding: 0%;
      background-color: ${({ theme }) =>
        theme.color.primary};
    `}

    ${({ back}) =>
      back &&
      css`
        height: 35px;
        background-image: url(${backArrowIcon});
        background-repeat: no-repeat;
        background-position: 0 50%;
        padding: 0 0 0 35px;
        background-color: #ffffff00;
        line-height: 35px;
        font-size: ${({ theme }) =>
          theme.fontSize.m};
      `}

    ${({ block }) =>
      block &&
      css`
        font-size: ${({ theme }) =>
          theme.fontSize.s};
        font-weight: ${({ theme }) =>
          theme.fontWeight.light};
        color: ${({ theme }) =>
          theme.color.black};
        border-radius: 15px 0 15px 0;
        background-color: ${({ theme }) =>
          theme.color.white};
      `}

    ${({ info }) =>
      info &&
      css`
        font-size: ${({ theme }) =>
          theme.fontSize.xl};
        background-color: #ffffff00;
        padding: 5px 10px;
        text-transform: uppercase;
        font-weight: ${({ theme }) =>
          theme.fontWeight.light};
      `}
`;

export default Button;
