import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

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
  component: Button,
  title: 'Button',
  decorators: [
    (storyFn) => (
      <Background>{storyFn()}</Background>
    ),
  ],
};

export const defaultBtn = () => (
  <Button>Finish</Button>
);

export const nextBtn = () => (
  <Button next>next step</Button>
);

export const startBtn = () => (
  <Background customBground="white">
    <Button start />
  </Background>
);

export const backBtn = () => (
  <Background customBground="white">
    <Button back />
  </Background>
);

export const modeBtn = () => (
  <Button mode>template</Button>
);
