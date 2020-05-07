import React from 'react';
import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
};

export const normal = () => (
  <Paragraph>Test</Paragraph>
);

export const view = () => (
  <Paragraph view={1}>test</Paragraph>
);
