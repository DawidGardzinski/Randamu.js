import React from 'react';
import styled, { css } from 'styled-components';
import Input from './Input';

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

export const checkbox = () => (
  <Input type="checkbox" />
);

export const checkboxDisabled = () => (
  <Input type="checkbox" disabled />
);

export const radio = () => <Input type="radio" />;
