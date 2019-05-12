import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import Menu from 'components/Menu/Menu';
import MobileSideBar from 'components/MobileSideBar/MobileSideBar';
import Sidebar from 'components/Sidebar/Sidebar';
import WithBorders from 'components/WithBorders/WithBorders';

import GlobalStyles from 'styles/GlobalStyles';
import {
  StyledContainer,
  StyledMenu,
  StyledSidebar,
  StyledContent,
} from './index.style';

const Layout = ({ children }) => (
  <StyledContainer>
    <GlobalStyles />
    <WithBorders>
      <StyledMenu>
        <Menu />
      </StyledMenu>
      <StyledSidebar>
        <Sidebar />
      </StyledSidebar>
      <StyledContent>{children}</StyledContent>
    </WithBorders>
    <MobileSideBar />
  </StyledContainer>
);

Layout.propTypes = {
  children: oneOfType([func, node]),
};

export default Layout;
