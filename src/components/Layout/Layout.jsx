import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import WithBorders from 'components/WithBorders/WithBorders';

import GlobalStyles from 'styles/GlobalStyles';
import { StyledContainer } from './Layout.style';

const Layout = ({ children }) => (
  <StyledContainer>
    <GlobalStyles />
    <WithBorders>{children}</WithBorders>
  </StyledContainer>
);

Layout.propTypes = {
  children: oneOfType([func, node]),
};

export default Layout;
