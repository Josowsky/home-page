import React from 'react';
import { func, oneOfType, node, bool } from 'prop-types';
import { Location } from '@reach/router';

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
} from './index.style';

const Layout = ({ children, isBlog }) => {
  if (isBlog)
    return (
      <StyledContainer>
        <GlobalStyles />
        <WithBorders>
          <StyledBlogContent>{children}</StyledBlogContent>
          <SimpleFooter />
        </WithBorders>
        <MobileSideBar />
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
  isBlog: bool.isRequired,
};

export default props => (
  <Location>
    {({ location }) => {
      const isBlog = /^\/blog\/*/g.test(location.pathname);

      return <Layout {...props} isBlog={isBlog} />;
    }}
  </Location>
);
