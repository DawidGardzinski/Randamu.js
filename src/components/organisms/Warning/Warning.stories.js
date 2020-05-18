import React from 'react';
import Warning from './Warning';

export default {
  component: Warning,
  title: 'Organisms/Warning',
};

export const warning = () => (
  <Warning
    clickConfirm={() => null}
    clickDeny={() => null}>
    Are you sure you want to download this file?
  </Warning>
);
