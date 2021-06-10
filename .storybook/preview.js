import React from 'react';
import { addDecorator } from '@storybook/react';

import GlobalStyles from 'styles/GlobalStyles';
import GlobalFonts from 'styles/GlobalFonts';

function withGlobalStyles(storyFn) {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);
