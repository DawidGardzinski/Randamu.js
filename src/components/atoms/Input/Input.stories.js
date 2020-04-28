import React from 'react';
import styled, { css } from 'styled-components';
import Input from './Input';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: orange;

  ${({ customBground }) =>
    customBground &&
    css`
      background-color: ${customBground};
    `}
`;

export default {
  component: Input,
  title: 'Atoms/Input',
  decorators: [
    (storyFn) => (
      <Background>{storyFn()}</Background>
    ),
  ],
};

export const number = () => (
  <Input type="number" />
);
