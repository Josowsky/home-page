import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import WithBorders from 'components/WithBorders/WithBorders';

import GlobalStyles from 'styles/GlobalStyles';
import GlobalFonts from 'styles/GlobalFonts';
import { StyledContainer } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <GlobalStyles />
      <GlobalFonts />
      <WithBorders>{children}</WithBorders>
    </StyledContainer>
  );
};

Layout.propTypes = {
  children: oneOfType([func, node]),
};

export default Layout;
