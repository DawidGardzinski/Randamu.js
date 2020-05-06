import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ view }) =>
    view &&
    css`
      color: ${({ theme }) =>
        theme.color.secondary};
      text-align: center;
      font-weight: ${({ theme }) =>
        theme.fontWeight.bold};
      padding: 0 10px;
      margin: 0;
    `}
`;

export default Paragraph;
