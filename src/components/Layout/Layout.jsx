import React from 'react';
import { func, oneOfType, node, shape, oneOf } from 'prop-types';

import Menu from 'components/Menu/Menu';
import MobileSideBar from 'components/MobileSideBar/MobileSideBar';
import Sidebar from 'components/Sidebar/Sidebar';
import WithBorders from 'components/WithBorders/WithBorders';
import SimpleFooter from 'components/SimpleFooter/SimpleFooter';

import GlobalStyles from 'styles/GlobalStyles';
import {
  StyledContainer,
  StyledMenu,
  StyledSidebar,
  StyledPageContent,
  StyledBlogContent,
} from './Layout.style';

const Layout = ({ children, pageContext }) => {
  if (pageContext.layoutType === 'blog')
    return (
      <StyledContainer>
        <GlobalStyles />
        <WithBorders>
          <StyledBlogContent>{children}</StyledBlogContent>
          <SimpleFooter />
        </WithBorders>
      </StyledContainer>
    );

  return (
    <StyledContainer>
      <GlobalStyles />
      <WithBorders>
        <StyledMenu>
          <Menu />
        </StyledMenu>
        <StyledSidebar>
          <Sidebar />
        </StyledSidebar>
        <StyledPageContent>{children}</StyledPageContent>
      </WithBorders>
      <MobileSideBar />
    </StyledContainer>
  );
};

Layout.propTypes = {
  children: oneOfType([func, node]),
  pageContext: shape({
    layoutType: oneOf(['blog', 'home']).isRequired,
  }).isRequired,
};

export default Layout;
