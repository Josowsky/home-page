import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import Menu from 'components/Menu/Menu';
import MobileSideBar from 'components/MobileSideBar/MobileSideBar';
import Sidebar from 'components/Sidebar/Sidebar';

import {
  StyledMenu,
  StyledSidebar,
  StyledPageContent,
} from '../Layout/Layout.style';

const HomePageTemplate = ({ children }) => (
  <>
    <StyledMenu>
      <Menu />
    </StyledMenu>
    <StyledSidebar>
      <Sidebar />
    </StyledSidebar>
    <StyledPageContent>{children}</StyledPageContent>
    <MobileSideBar />
  </>
);

HomePageTemplate.propTypes = {
  children: oneOfType([func, node]),
};

export default HomePageTemplate;
