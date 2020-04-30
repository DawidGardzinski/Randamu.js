import React from 'react';
import styled, { css } from 'styled-components';
import Label from './Label';

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
  component: Label,
  title: 'Atoms/Label',
  decorators: [
    (storyFn) => (
      <Background>{storyFn()}</Background>
    ),
  ],
};

export const number = () => <Label>Number</Label>;

export const checkbox = () => (
  <Label checkbox>checkbox</Label>
);

export const radio = () => (
  <Label radio>radio</Label>
);
