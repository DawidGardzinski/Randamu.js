import React from 'react';
import styled, { css } from 'styled-components';
import TopBar from './TopBar';

const Background = styled.div`
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
  component: TopBar,
  title: 'Molecules/TopBar',
  decorators: [
    (storyFn) => (
      <Background>{storyFn()}</Background>
    ),
  ],
};

export const custom = () => (
  <TopBar mode="Custom" />
);
export const template = () => (
  <TopBar mode="Template" />
);
