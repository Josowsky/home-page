import React from 'react';
import { addDecorator } from '@storybook/react';

import GlobalStyles from 'styles/GlobalStyles';

function withGlobalStyles(storyFn) {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);
