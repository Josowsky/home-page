import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import WithBorders from 'components/WithBorders/WithBorders';
import SimpleFooter from 'components/SimpleFooter/SimpleFooter';

import GlobalStyles from 'styles/GlobalStyles';
import { StyledContainer } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <GlobalStyles />
      <WithBorders>
        {children}
        <SimpleFooter />
      </WithBorders>
    </StyledContainer>
  );
};

Layout.propTypes = {
  children: oneOfType([func, node]),
};

export default Layout;
