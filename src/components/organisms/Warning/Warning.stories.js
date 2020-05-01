import React from 'react';
import Warning from './Warning';

export default {
  component: Warning,
  title: 'Organisms/Warning',
};

export const warning = () => (
  <Warning>
    Are you sure you want to download this file?
  </Warning>
);
