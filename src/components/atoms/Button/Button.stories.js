import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) =>
    theme.color.primary};

  ${({ customBground }) =>
    customBground &&
    css`
      background-color: ${customBground};
    `}
`;

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [
    (storyFn) => (
      <Background>{storyFn()}</Background>
    ),
  ],
};

export const Default = () => (
  <Button>Finish</Button>
);

export const next = () => (
  <Button next={1}>next step</Button>
);

export const start = () => (
  <Background customBground="white">
    <Button start={1} />
  </Background>
);

export const back = () => (
  <Background customBground="white">
    <Button back={1} />
  </Background>
);

export const block = () => (
  <Button block={1}>template</Button>
);

export const information = () => (
  <Button info={1}>?</Button>
);
