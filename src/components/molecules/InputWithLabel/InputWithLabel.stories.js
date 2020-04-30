import React from 'react';
import styled, { css } from 'styled-components';
import InputWithLabel from './InputWithLabel';

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
  component: InputWithLabel,
  title: 'Molecules/InputWithLabel',
  decorators: [
    (storyFn) => (
      <Background>{storyFn()}</Background>
    ),
  ],
};

export const number = () => (
  <InputWithLabel
    type="number"
    labelText="Number"
    id="num"
    name="num"
  />
);
export const radio = () => (
  <InputWithLabel
    type="radio"
    labelText="JSON"
    id="radio"
    name="radio"
  />
);
export const checkbox = () => (
  <InputWithLabel
    type="checkbox"
    labelText="enabled"
    id="box"
    name="box"
  />
);
export const checkboxDisabled = () => (
  <InputWithLabel
    type="checkbox"
    labelText="disabled"
    id="box"
    name="box"
    disabled
  />
);
