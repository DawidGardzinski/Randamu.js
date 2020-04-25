import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import GlobalStyles from 'theme/GlobalStyles';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));
addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
